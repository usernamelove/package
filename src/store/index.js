import first from './modules/first';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//组装模块并导出 store 的地方
export default new Vuex.Store({
  //模块相关
  modules: {
    first
  },

});