import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

import VueRouter from 'vue-router';
import { routes } from './routes/routes'

import { store } from './store/store';

//Vue Http Config
Vue.use(VueResource);

Vue.http.options.root = 'https://vuecourse-aba5f.firebaseio.com/stock_trader.json';


//Router Config
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});


//Filter
Vue.filter('toCurrency', (val) =>{
    return '$' + val.toLocaleString();
});

new Vue({
  el: '#app',
    router,
    store,
  render: h => h(App)
});
