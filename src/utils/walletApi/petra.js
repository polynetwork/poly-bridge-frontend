import store from '@/store';
import {
  AptosAccount,
  AptosClient,
  TxnBuilderTypes,
  BCS,
  // MaybeHexString,
  HexString,
  // FaucetClient,
} from 'aptos';
// import { getChainApi } from '@/utils/chainApi';
import {
  integerToDecimal,
  // decimalToInteger,
  // toStandardHex,
  // integerToHex,
  // reverseHex,
} from '@/utils/convertors';
import {
  WalletName,
  // ChainId,
  // SingleTransactionStatus,
  // NetworkChainIdMaps,
  // EthNetworkChainIdMaps,
} from '@/utils/enums';
import { WalletError } from '@/utils/errors';
import { tryToConvertAddressToHex } from '.';

const PETRA_CONNECTED_KEY = 'PETRA_CONNECTED';
const NODE_URL = 'https://fullnode.devnet.aptoslabs.com';

const client = new AptosClient(NODE_URL);

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
const getAptosWallet = () => {
  return window.aptos;
};

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
  const wallet = getAptosWallet();

  await wallet.disconnect();
  await wallet.connect();
  const accounts = await window.aptos.account();
  const saddress = accounts.address || null;
  const addressHex = saddress;
  // const chainid = await window.aptos.getChainId();
  store.dispatch('updateWallet', {
    name: WalletName.Petra,
    address: saddress,
    addressHex,
    connected: true,
    chainId: 1,
    walletChainId: 20,
  });
}

async function init() {
  try {
    if (!window.aptos) {
      return;
    }
    store.dispatch('updateWallet', { name: WalletName.Petra, installed: true });
    console.log(sessionStorage.getItem(PETRA_CONNECTED_KEY));
    if (sessionStorage.getItem(PETRA_CONNECTED_KEY) === 'true') {
      await queryState();
    }
    // window.martian.onAccountChange(address => {
    //   const saddress = address;
    //   const addressHex = address;
    //   store.dispatch('updateWallet', {
    //     name: WalletName.Petra,
    //     address: saddress,
    //     addressHex,
    //     connected: true,
    //   });
    // });

    // window.martian.onNetworkChange(name => {
    //   store.dispatch('updateWallet', {
    //     name: WalletName.Petra,
    //     chainId: name,
    //   });
    // });
  } finally {
    store.getters.getWallet(WalletName.Petra).deferred.resolve();
  }
}

async function connect() {
  try {
    await window.aptos.connect();
    await queryState();
    sessionStorage.setItem(PETRA_CONNECTED_KEY, 'true');
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
    const result = await client.getAccountResource(address, `${tokenHash}::coin::CoinStore`);
    console.log(result);
    return integerToDecimal(result, tokenBasic.decimals);
  } catch (error) {
    throw convertWalletError(error);
  }
}

async function registerCoin({ address, tokenHash }) {
  try {
    const sender = address;
    const payload = {
      function: `0x4a98355a0d56b8be0b8c95c85c522cff292916a716907e36a874b31c73b32eb3::nb::register`,
      type_arguments: [],
      arguments: [],
    };

    const transaction = await window.martian.generateTransaction(sender, payload);
    const ret = await window.martian.signAndSubmitTransaction(transaction);
    console.log(ret);
  } catch (e) {
    console.log(e);
  }
}

async function slock() {
  try {
    const account1 = await window.martian.account();
    // const account1 = new AptosAccount(Uint8Array.from('b2453da47e3228dddfb343bc04d12766179610ad17467d554ab0b6d2cd79b64b'));
    // const sender = '0xb2453da47e3228dddfb343bc04d12766179610ad17467d554ab0b6d2cd79b64b'
    // const entryFunctionPayload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
    //   TxnBuilderTypes.EntryFunction.natural(
    //     "0x4a98355a0d56b8be0b8c95c85c522cff292916a716907e36a874b31c73b32eb3::wrapper_v1",
    //     "lock_and_pay_fee",
    //     ['0x4a98355a0d56b8be0b8c95c85c522cff292916a716907e36a874b31c73b32eb3::nb::NBCoin'],
    //     [1000, 1000, 79, 'c9d93747EAbc4d738fAE96bcF64d9EC04ffD8C95'],
    //   ),
    // );
    // const rawTxn = await client.generateRawTransaction(account1.address, entryFunctionPayload);

    // const bcsTxn = AptosClient.generateBCSTransaction(account1, rawTxn);
    // const ret = await client.submitSignedBCSTransaction(bcsTxn);
    // const sender = account1.address
    // const toAddress = new HexString('0xc9d93747EAbc4d738fAE96bcF64d9EC04ffD8C95')
    // console.log(toAddress.toShortString())
    // console.log(toAddress.toString())
    // console.log(toAddress.toUint8Array())
    // console.log(toAddress.toString().toLowerCase())
    // const payload = {
    //   function: "0x4a98355a0d56b8be0b8c95c85c522cff292916a716907e36a874b31c73b32eb3::wrapper_v1::lock_and_pay_fee",
    //   type_arguments: ['0x4a98355a0d56b8be0b8c95c85c522cff292916a716907e36a874b31c73b32eb3::nb::NBCoin'],
    //   arguments: [1000, 1000, 79, 'c9d93747eabc4d738fae96bcf64d9ec04ffd8c95']
    // };
    // const transaction = await window.martian.generateTransaction(sender, payload);
    // debugger
    // console.log(transaction)
    // const ret = await window.martian.signAndSubmitTransaction(transaction);
    // console.log(ret)
    const wallet = getAptosWallet();
    await wallet.disconnect();
    const response = await wallet.connect();
    console.log(response); // { address: string, address: string }
    const account = await wallet.account();
    console.log(account);
    const transaction = {
      arguments: [1000, 1000, 79, 'c9d93747eabc4d738fae96bcf64d9ec04ffd8c95'],
      function:
        '0x4a98355a0d56b8be0b8c95c85c522cff292916a716907e36a874b31c73b32eb3::wrapper_v1::lock_and_pay_fee',
      type: 'entry_function_payload',
      type_arguments: [
        '0x4a98355a0d56b8be0b8c95c85c522cff292916a716907e36a874b31c73b32eb3::nb::NBCoin',
      ],
    };
    const pendingTransaction = await window.aptos.signAndSubmitTransaction(transaction);

    // In most cases a dApp will want to wait for the transaction, in these cases you can use the typescript sdk
    const txn = await client.waitForTransactionWithResult(pendingTransaction.hash);
    console.log(txn);
  } catch (e) {
    console.log(e);
  }
}

export default {
  install: init,
  connect,
  getBalance,
  registerCoin,
  slock,
};
