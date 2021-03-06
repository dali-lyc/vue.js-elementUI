// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jQuery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import global from './components/global.js'

Vue.config.productionTip = false;

window.$ = window.jQuery = $;
Vue.prototype.GLOBAL = global;

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
