import Vue from 'vue';
import Vuex from 'vuex';
import chains from './chains';
import wallets from './wallets';
import tokenBasics from './tokenBasics';
import tokens from './tokens';
import tokenMaps from './tokenMaps';
import transactions from './transactions';
import balances from './balances';
import allowances from './allowances';
import fees from './fees';
import health from './health';
import expecttime from './expecttime';
import nftAssetsBasics from './nftAssetsBasics';
import register from './register';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chains,
    wallets,
    tokenBasics,
    tokens,
    tokenMaps,
    transactions,
    balances,
    allowances,
    fees,
    health,
    expecttime,
    nftAssetsBasics,
    register,
  },
});
