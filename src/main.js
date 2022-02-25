import Vue from 'vue'
import VueRouter from "vue-router";
import App from './demo/index.vue'

import Toast from './ya/toast'
import Dialog from './ya/dialog'
import ImagePreview from './ya/image-preview';
import RouterConfig from './demo/config/route.js'

import './ya/common/css/reset.less';

Vue.use(VueRouter);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(ImagePreview);


const router = new VueRouter({
  routes:RouterConfig 
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title=to?.meta?.title||'ya-ui';
  next();
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')