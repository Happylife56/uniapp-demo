/**
 *  @function request
 */
import store from '../store';

export default {
	async request(url: string, method: any, data: any, errMessgae?: string) {
		const baseUrl = store.state.globalData.subDomain;
		console.log(url, method, data);
		var result: any = await uni.request({
			url: `${baseUrl}${url}`,
			method
			data
			// header: {}
		});
		const [error, res] = result;
		console.log(result);
		if (error) {
			this.checkMessage('服务器错误，请联系工作人员');
			return;
		}
		if (res.statusCode === 200 && (res.data.code === 0 || res.data.code === 1001)) return res.data.data;
		else this.checkMessage(errMessgae || res.data.message);
	},
	// 报错提示
	checkMessage(errMessgae: string) {
		uni.showToast({
			title: errMessgae,
			icon: 'none',
			duration: 2000
		});
	}
};
