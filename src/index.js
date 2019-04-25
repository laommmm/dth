// 公共CSS
import '@/style/style';
import Vue from 'vue';

// 引入jquery
import $ from "jquery";
window['$'] = $;

// 公共组件引入
import '@/components/components';

//VUEX
import store from '@/vuex';

// 路由router
import router from '@/libs/router';

// v-tap 解决IOS点击事件300ms延迟问题
import vTap from 'v-tap';

Vue.use(vTap);

//滚动插件
import BScroll from 'better-scroll';
Vue.prototype.BScroll=BScroll;

// 注册Vue公共方法
import utils from '@/libs/utils';

Vue.use(utils);

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper, );

// 引入vconsole
import Vconsole from 'vconsole';
const vConsole = new Vconsole();

// Vue路由跳转动画
import Navigation from 'vue-navigation';
Vue.use(Navigation, {router, store, moduleName: 'navigation', keyName: 'VNK'});

// 吐司
import Toast from 'mint-ui/lib/toast';
window['Toast'] = Toast;

//微信sdk
import wxSdk from 'weixin-js-sdk';
Vue.prototype.wxSdk=wxSdk;

//接口
import axios from 'axios';

Vue.prototype.axios = axios;
Vue.prototype.axios.defaults.withCredentials = true;

import api from '@/libs/api';
import http from '@/apiGet/http';

Vue.prototype.api = api;
Vue.prototype.http = http;

//下拉加载更多
Vue.directive('viewmore', {
    bind: (el, binding) => {
        el.addEventListener('scroll', () => {
            if (el.scrollTop + el.offsetHeight >= el.scrollHeight) {
                binding.value();
            }
        }, false)
    }
});
//切页面滚动条顶部
router.afterEach(() => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});

import Index from '@/index.vue';
const app = new Vue({
  router,
  render: h => h(Index),
  store
}).$mount("#app");
