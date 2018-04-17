var HelloComponent = Vue.extend({
  template: '<h1>Hello</h1>'
});
// registering component
Vue.component('hello-component', HelloComponent);

// initializing the Vue application
var app = new Vue({
  el: '#app',
})
