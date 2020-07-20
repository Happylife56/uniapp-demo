import author from './author';
export default {
	init() {
		// #ifdef  MP-WEIXIN
		const updateManager = uni.getUpdateManager();
		updateManager.onCheckForUpdate(function() {
			// 请求完新版本信息的回调
			// console.log(res.hasUpdate)
		});
		updateManager.onUpdateReady(function() {
			uni.showModal({
				title: '更新提示',
				content: '新版本已经准备好，是否重启应用？',
				success: function(res: any) {
					if (res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate();
					}
				}
			});
		});
		updateManager.onUpdateFailed(function() {
			// 新的版本下载失败
			uni.showModal({
				title: '更新提示',
				content: '新版本下载失败',
				showCancel: false
			});
		});

		/**
		 * 监听网络状态变化 设置网络的状态
		 */
		uni.onNetworkStatusChange(function(res: any) {
			if (!res.isConnected) {
				uni.showToast({
					title: '网络已断开',
					icon: 'loading',
					duration: 2000
				});
			} else {
				uni.hideToast();
			}
		});

		// 登录
		author.loginAuthorize();
		// #endif
	}
};
