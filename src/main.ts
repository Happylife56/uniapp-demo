import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import '@/styles/common.scss'
import '@/styles/iconfont/iconfont.css'

new App({store}).$mount()
