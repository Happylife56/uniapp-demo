import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import common from './modules/common';
Vue.use(Vuex);

export default new Vuex.Store({
	// modules: { common },
	...common,
	plugins: [
		// vuex 存储改名
		createPersistedState({
			storage: {
				getItem: key => uni.getStorageSync(`im${key}`),
				setItem: (key, value) => uni.setStorageSync(`im${key}`, value),
				removeItem: key => uni.removeStorageSync(`im${key}`)
			}
		})
	] // 状态持久化
});
