/**
 * 登录授权操作
 * @function { loginAuthorize } 登录授权
 * @function { getStoreList } 获取门店的列表
 */
import { isEmptyObj } from './index';
import store from '../store';
export default {
	loginAuthorize() {
		// 登录
		uni.login({
			success: (res: any) => {
				if (res.code) {
					this.authorHandler(res.code);
				} else {
					uni.showToast({
						title: '登录失败！请重新进入小程序',
						icon: 'none',
						duration: 2000
					});
				}
			}
		});
	},
	// 授权操作
	authorHandler(js_code: string) {
		//获取第三方的信息
		if (uni.getExtConfig) {
			uni.getExtConfig({
				success: config => {
					if (!isEmptyObj(config.extConfig)) {
						store.commit('SET_GLOBAL_DATA', config.extConfig);
					}
					const { busId, appid, style, appVersion } = config.extConfig;
					// 授权
					uni.getUserInfo({
						success: async info => {
							console.log(info);
							// this.getStoreList();
							//获取微信用户的openId
							const params = { busId, js_code, appid, rawData: info.rawData, style, appVersion };
							// this.getStoreList() // 获取门店
							// let result = await $api.getOpenId(params);
							// if (result) {
							// 	const globalData = this.getGlobalData();
							// 	const { openId, member } = result;
							// 	globalData.openId = openId;
							// 	globalData.memberId = member.id;
							// 	store.commit('SET_GLOBAL_DATA', globalData);
							// 	uni.setStorageSync('memberId', member.id);
							// }
						}
					});
					this.getSetting(); //获取用户信息
				}
			});
		}
	},
	// 获取用户信息
	getSetting() {
		uni.getSetting({
			success: function(res) {
				console.log(res);
				if (res.authSetting['scope.userInfo']) {
					// 必须是在用户已经授权的情况下调用
					uni.getUserInfo({
						success: function(res) {
							store.commit('SET_USER_INFO', res.userInfo);
						}
					});
				} else {
					// 没有授权
					store.commit('SET_USER_INFO', {});
				}
			}
		});
	}
};
