<script lang="ts">
    import Vue from 'vue';
	import weappInit from './utils/weapp-init'
    export default Vue.extend({
        mpType: 'app',
        onLaunch() {
            console.log('App Launch')
			weappInit.init()
        },
        onShow() {
            console.log('App Show')
			const extConfig = uni.getExtConfigSync ? uni.getExtConfigSync() : {}
			console.log(extConfig)
        },
        onHide() {
            console.log('App Hide')
        }
    });
</script>

<style>
    /*每个页面公共css */
</style>
