App({
	globalData: {
		memberHttp: 'https://member.deeptel.com.cn/', //测试优惠券请求接口域名
		// memberHttp: 'https://nbmember.deeptel.com.cn', //堡垒优惠券请求接口域名
		customerHttp: 'https://applet-biz-api.deeptel.com.cn', //测试客服接口域名
		// customerHttp:'https://nbapplet-biz-api.deeptel.com.cn',//堡垒客服接口域名
	},
	//公共的memberId
	setMemberKey() {
		return 'memberId'
	},
	//获取memberid
	getMemberId() {
		let key = this.setMemberKey();
		return wx.getStorageSync(key)
	}
})
