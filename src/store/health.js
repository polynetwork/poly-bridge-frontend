import Vue from 'vue';
import getStoreKey from '@/utils/getStoreKey';
import httpApi from '@/utils/httpApi';

export default {
  state: {
    healthDataMap: {},
  },
  getters: {
    getHealthData: state => ({ chindIds }) => state.manualTxDataMap[getStoreKey({ chindIds })],
  },
  mutations: {
    setHealthData(state, { params, value }) {
      Vue.set(state.healthDataMap, getStoreKey(params), value);
    },
  },
  actions: {
    async getHealthData({ commit }, chindIds) {
      const healthData = await httpApi.getHealthData({ chindIds });
      commit('setHealthData', { params: { chindIds }, value: healthData });
    },
  },
};
