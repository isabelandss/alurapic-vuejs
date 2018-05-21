import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

//el: elemento (nome do componente, é como ele será chamado, usado, no HTML. Lembrar de Angular)
new Vue({
  el: '#app',
  render: h => h(App)
})
