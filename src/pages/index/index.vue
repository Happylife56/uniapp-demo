<template>
	<view class="content">
		<image class="logo" src="../../static/logo.png"></image>
		<view>
			<text class="title">{{title}} {{canIUse}}</text>
			<button class="userinfo-avatar user-btn avatar-button" open-type="getUserInfo" @getuserinfo="getUserInfo">授权
			</button>
		</view>
	</view>
</template>

<script lang="ts">
	// import author from '../../utils/author'
	import {
		Component,
		Vue
	} from 'vue-property-decorator';
	@Component({})
	export default class Index extends Vue {
		title: string = '123'
		canIUse: boolean = uni.canIUse('button.open-type.getUserInfo')

		onLoad() {
			console.log(66666)
		}

		getUserInfo(e: any) {
			if (!e.detail.userInfo) return // 判断是否为拒绝
			// 登录授权
			// author.loginAuthorize()
		}
	}
	// export default Vue.extend({
	// 	data() {
	// 		return {
	// 			title: 'Hello2'
	// 		}
	// 	},
	// 	onLoad() {

	// 	},
	// 	methods: {

	// 	}
	// });
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
