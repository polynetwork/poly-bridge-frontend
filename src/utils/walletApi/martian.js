import store from '@/store';
import { AptosAccount, AptosClient, HexString, FaucetClient, AptosTypes } from 'aptos';
import { getChainApi } from '@/utils/chainApi';
import {
  integerToDecimal,
  decimalToInteger,
  toStandardHex,
  integerToHex,
  reverseHex,
} from '@/utils/convertors';
import { WalletName } from '@/utils/enums';
import { WalletError } from '@/utils/errors';
import { TARGET_MAINNET } from '@/utils/env';
import { formatEnum } from '@/utils/formatters';
import { tryToConvertAddressToHex } from '.';

const MARTIAN_CONNECTED_KEY = 'MARTIAN_CONNECTED';
const NODE_URL = TARGET_MAINNET
  ? 'https://fullnode.mainnet.aptoslabs.com'
  : 'https://testnet.aptoslabs.com';
const FAUCET_URL = 'https://faucet.devnet.aptoslabs.com';

const client = new AptosClient(NODE_URL);

const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL, null);

// function confirmLater(promise) {
//   return new Promise((resolve, reject) => {
//     promise.on('transactionHash', resolve);
//     promise.on('error', reject);

//     function onConfirm(confNumber, receipt) {
//       promise.off('confirmation', onConfirm);
//     }
//     promise.on('confirmation', onConfirm);
//   });
// }

function convertWalletError(error) {
  if (error instanceof WalletError) {
    return error;
  }
  let code = WalletError.CODES.UNKNOWN_ERROR;
  if (error.code === 4001) {
    code = WalletError.CODES.USER_REJECTED;
  }
  if (error.toString().indexOf('32005') > -1) {
    return null;
  }
  if (error.toString().indexOf('32000') > -1) {
    return null;
  }
  if (error.toString().indexOf('account_not_found') > -1) {
    code = WalletError.CODES.NOT_CREATED_ACCOUNT;
  }
  return new WalletError(error.message, { code, cause: error });
}

async function queryState() {
  const accounts = await window.martian.account();
  const saddress = accounts.address || null;
  const addressHex = saddress;
  const chainid = await window.martian.getChainId();
  store.dispatch('updateWallet', {
    name: WalletName.Martian,
    address: saddress,
    addressHex,
    connected: true,
    chainId: chainid,
    walletChainId: 20,
  });
}

async function init() {
  try {
    if (!window.martian) {
      return;
    }
    store.dispatch('updateWallet', { name: WalletName.Martian, installed: true });
    console.log(sessionStorage.getItem(MARTIAN_CONNECTED_KEY));
    if (sessionStorage.getItem(MARTIAN_CONNECTED_KEY) === 'true') {
      await queryState();
    }
    window.martian.onAccountChange(address => {
      const saddress = address;
      const addressHex = address;
      store.dispatch('updateWallet', {
        name: WalletName.Martian,
        address: saddress,
        addressHex,
        connected: true,
      });
    });

    window.martian.onNetworkChange(name => {
      store.dispatch('updateWallet', {
        name: WalletName.Martian,
        chainId: name,
      });
    });
  } finally {
    store.getters.getWallet(WalletName.Martian).deferred.resolve();
  }
}

async function connect() {
  try {
    await window.martian.connect();
    await queryState();
    sessionStorage.setItem(MARTIAN_CONNECTED_KEY, 'true');
  } catch (error) {
    throw convertWalletError(error);
  }
}

async function isAccountRegistered({ address, tokenHash }) {
  try {
    await window.martian.connect();
    const { chainId } = await window.martian.getChainId();
    const targetChainID = TARGET_MAINNET ? 1 : 2;
    if (chainId !== targetChainID) {
      throw new WalletError('Wallet is not in correct network.', {
        code: WalletError.CODES.INCORRECT_NETWORK,
        detail: {
          walletName: formatEnum('Martain', { type: 'walletName' }),
          chainNetworkName: formatEnum(TARGET_MAINNET ? 41 : 998, { type: 'chainNetworkName' }),
        },
      });
    }
    if (!address || !tokenHash) {
      return true;
    }
    const resources = await window.martian.getAccountResources(address);
    let tokenResource;
    let isRegisterd = false;
    for (let i = 0; i < resources.length; i += 1) {
      if (resources[i].type.indexOf(tokenHash) > -1) {
        tokenResource = resources[i];
        isRegisterd = true;
      }
    }
    return isRegisterd;
  } catch (error) {
    console.log(error);
    throw convertWalletError(error);
  }
}

async function getBalance({ chainId, address, tokenHash }) {
  try {
    await window.martian.connect();
    const tokenBasic = store.getters.getTokenBasicByChainIdAndTokenHash({ chainId, tokenHash });
    const tokenBasicName = tokenBasic.name;
    const token = store.getters.getTokenByTokenBasicNameAndChainId({ tokenBasicName, chainId });
    const resources = await window.martian.getAccountResources(address);
    let tokenResource;
    for (let i = 0; i < resources.length; i += 1) {
      if (resources[i].type.indexOf(tokenHash) > -1) {
        tokenResource = resources[i];
      }
    }
    let res;
    if (tokenResource) {
      res = integerToDecimal(tokenResource.data.coin.value, token.decimals);
    } else {
      res = 0;
    }
    return res;
  } catch (error) {
    throw convertWalletError(error);
  }
}

async function registerCoin({ chainid, address, tokenHash }) {
  try {
    await window.martian.connect();
    const { chainId } = await window.martian.getChainId();
    const targetChainID = TARGET_MAINNET ? 1 : 2;
    if (chainId !== targetChainID) {
      throw new WalletError('Wallet is not in correct network.', {
        code: WalletError.CODES.INCORRECT_NETWORK,
        detail: {
          walletName: formatEnum('Martain', { type: 'walletName' }),
          chainNetworkName: formatEnum(TARGET_MAINNET ? 41 : 998, { type: 'chainNetworkName' }),
        },
      });
    }
    const chain = store.getters.getChain(chainid);
    const sender = address;
    const payload = {
      function: `0x1::managed_coin::register`,
      type_arguments: [tokenHash],
      arguments: [],
    };

    const transaction = await window.martian.generateTransaction(sender, payload);
    const ret = await window.martian.signAndSubmitTransaction(transaction);
    return ret;
  } catch (error) {
    throw convertWalletError(error);
  }
}

async function lock(fromChainId, fromAddress, fromTokenHash, toChainId, toAddress, amount, fee) {
  try {
    const chain = store.getters.getChain(fromChainId);
    const tokenBasic = store.getters.getTokenBasicByChainIdAndTokenHash({
      chainId: fromChainId,
      tokenHash: fromTokenHash,
    });
    const tokenBasicName = tokenBasic.name;
    const token = store.getters.getTokenByTokenBasicNameAndChainId({ tokenBasicName, fromChainId });
    const toChainApi = await getChainApi(toChainId);
    const toAddressHex = await toChainApi.addressToHex(toAddress);
    const amountInt = decimalToInteger(amount, token.decimals);
    const feeInt = decimalToInteger(fee, chain.nftFeeName ? 8 : token.decimals);
    const toAddressUnit8 = Buffer.from(toAddressHex, 'hex');
    const payload = {
      arguments: [amountInt, feeInt, toChainId, toAddressUnit8],
      function: `${chain.lockContractHash}::wrapper_v1::lock_and_pay_fee`,
      type: 'entry_function_payload',
      type_arguments: [fromTokenHash],
    };
    const transaction = await window.martian.generateTransaction(fromAddress, payload);
    const ret = await window.martian.signAndSubmitTransaction(transaction);
    return toStandardHex(ret);
  } catch (e) {
    throw convertWalletError(e);
  }
}

export default {
  install: init,
  connect,
  getBalance,
  registerCoin,
  isAccountRegistered,
  lock,
};
