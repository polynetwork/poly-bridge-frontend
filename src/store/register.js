import Vue from 'vue';
import getStoreKey from '@/utils/getStoreKey';
import { getWalletApi } from '@/utils/walletApi';

export default {
  state: {
    reigsterMap: {},
  },
  getters: {
    getReigster: state => ({ chainId, address, tokenHash }) =>
      state.reigsterMap[getStoreKey({ chainId, address, tokenHash })],
  },
  mutations: {
    setReigster(state, { params, value }) {
      Vue.set(state.reigsterMap, getStoreKey(params), value);
    },
  },
  actions: {
    async getReigster({ getters, commit }, { chainId, address, tokenHash }) {
      const wallet = getters.getChainConnectedWallet(chainId);
      if (!wallet) {
        return;
      }
      const walletApi = await getWalletApi(wallet.name);
      const registerd = await walletApi.isAccountRegistered({ address, tokenHash });
      commit('setReigster', { params: { chainId, address, tokenHash }, value: registerd });
    },
  },
};
