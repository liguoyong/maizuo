import Vue from 'vue'
import App from './App'
import router from './router'

//引入过滤器
import filters  from './filters'
Vue.use(filters);

// 引入全局组件
import Page from './components/common/Page'
Vue.component('page', Page);
// Vue.component('film',Page);
//为了非父子组件传值
Vue.prototype.$center = new Vue();

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
