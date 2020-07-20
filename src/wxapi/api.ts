import $api from './main'

export default {
    //获取微信用户的openId
    getOpenId(data:any){
        return $api.request(`/shops/app/fans/CF946E2B/miniProgramGetMember`, 'GET', data,'获取用户信息失败，请下拉刷新')
    },

    //店铺分页查询
    selectAllShop(data:any)  {
        return $api.request(`/shops/app/fans/CF946E2B/getShopListByBusId`, 'GET', data)
    },
    //商品搜索【敏库接口】
    goodsSearch: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/pro/search`, 'post', data)
    },

    //计算活动商品(增加商品时调用)
    compute: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/compute/${data.shopId}`, 'post', data.bo)
    },
    //结算销售单
    tallyOrder: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/tallyOrder/${data.shopId}`, 'post', data.bo)
    },

    //首页-获取当前门店当班信息
    getWorkingByShopId: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/getWorkingByShopId`, 'get', data)
    },

    //小程序支付
    weChatPay: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/weChatPay`, 'post', data)
    },

    //我的订单-获取待付款订单
    getNotPayOrderPage: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/getNotPayOrderPage`, 'get', data)
    },

    //我的订单-获取已完成订单
    getPaidOrderPage: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/getPaidOrderPage`, 'get', data)
    },

    //我的订单-获取已失效订单
    getNotPayLoseOrderPage: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/getNotPayLoseOrderPage`, 'get', data)
    },

    //我的订单-获取订单内商品详情
    getOrderCommodityList: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/getOrderCommodityList`, 'get', data)
    },

    //我的订单-取消订单
    delNotPayOrder: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/delNotPayOrder`, 'post', data)
    },

    //获取订单核销码
    getConsumeCode: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/select/getConsumeCode`, 'get', data)
    },

    //获取订单核销二维码
    getQRPayCode: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/getQRPayCode`, 'get', data)
    },

    //获取登录基础数据
    getLoginData: (data:any) => {
        return $api.request(`/shops/erp/basis/CF946E2B/getLoginData`, 'get', data)
    },

    //首页-获取粉丝会员卡信息
    findCardByMemberId: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/findCardByMemberId`, 'get', data)
    },

    //获取sokcet2 Token
    getWebSocket2Token: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/getWebSocket2TokenByPushKeyAndLoginStyle`, 'get', data)
    },

    //储蓄卡支付
    memberCardPay: (data:any) => {
        return $api.request(`/shops/app/fans/CF946E2B/memberCardPay/${data.shopId}`, 'post', data)
    },
   
    // //验证会员卡的密码是否正确 
    // checkCardPwd: (data:any) => {
    //     return $api.request3(`/shops/app/fans/CF946E2B/checkCardPwd`, 'post', data)
    // },
}