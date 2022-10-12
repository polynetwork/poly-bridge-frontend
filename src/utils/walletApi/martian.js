import store from '@/store';
import {
  AptosAccount,
  AptosClient,
  TxnBuilderTypes,
  BCS,
  MaybeHexString,
  HexString,
  FaucetClient,
} from 'aptos';
import { getChainApi } from '@/utils/chainApi';
import {
  integerToDecimal,
  decimalToInteger,
  toStandardHex,
  integerToHex,
  reverseHex,
} from '@/utils/convertors';
import {
  WalletName,
  ChainId,
  SingleTransactionStatus,
  NetworkChainIdMaps,
  EthNetworkChainIdMaps,
} from '@/utils/enums';
import { WalletError } from '@/utils/errors';
import { TARGET_MAINNET } from '@/utils/env';
import { tryToConvertAddressToHex } from '.';

const MARTIAN_CONNECTED_KEY = 'MARTIAN_CONNECTED';
const NODE_URL = 'https://fullnode.devnet.aptoslabs.com';

const aptosClient = new AptosClient(NODE_URL);

function confirmLater(promise) {
  return new Promise((resolve, reject) => {
    promise.on('transactionHash', resolve);
    promise.on('error', reject);

    function onConfirm(confNumber, receipt) {
      promise.off('confirmation', onConfirm);
    }
    promise.on('confirmation', onConfirm);
  });
}

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
  return new WalletError(error.message, { code, cause: error });
}

async function queryState() {
  const accounts = await window.martian.account();
  const saddress = accounts[0] || null;
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

async function getBalance({ chainId, address, tokenHash }) {
  try {
    const tokenBasic = store.getters.getTokenBasicByChainIdAndTokenHash({ chainId, tokenHash });
    if (tokenHash === '0000000000000000000000000000000000000000') {
      window.martian.legacy.getAccountBalance(resp => {
        let res;
        if (resp.status === 200) {
          res = resp.data;
        }
        return res;
      });
    }
    const result = await aptosClient.getAccountResource(address, `${tokenHash}::coin::CoinStore`);
    console.log(result);
    return integerToDecimal(result, tokenBasic.decimals);
  } catch (error) {
    throw convertWalletError(error);
  }
}

export default {
  install: init,
  connect,
  getBalance,
};
