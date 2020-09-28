/*
  @memberHttp //优惠券请求接口域名
  @subDomain  //请求域名
  @socketdomain //socket请求域名
  @appid //小程序appid
*/

export default {
	//测试
	DEV: {
		busId: 36,
		domain: 'https://deeptel.com.cn',
		subDomain: 'https://applet-biz-api.deeptel.com.cn/shop',
		upload: 'http://maint.deeptel.com.cn/upload/',
		appid: 'wx35a06f1839079afe',
		socketdomain: 'https://socket1.duofriend.com/',
		memberHttp: 'https://member.deeptel.com.cn',
		style: '15'
	},
	PRE: {
		// 堡垒
		busId: 4856,
		domain: 'https://nb.deeptel.com.cn',
		upload: 'http://maint.deeptel.com.cn/upload/',
		appid: 'wx111aaf23005096ab',
		subDomain: 'https://nbapplet-biz-api.deeptel.com.cn/shop',
		socketdomain: 'https://socket1.duofriend.com/',
		memberHttp: 'https://nbmember.deeptel.com.cn/',
		style: '15'
	}
};
