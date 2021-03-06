import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-http-17bf6.firebaseio.com/";
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }

  next(response => {
    response.json = () => {
      return {
        data: response.body
      };
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})