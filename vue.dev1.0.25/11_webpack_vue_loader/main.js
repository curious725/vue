var Vue = require('vue');
var hello = require('vue!./components/hello.vue')

new Vue({
  el: 'body',
  components: {
    hello: hello
  }
})
