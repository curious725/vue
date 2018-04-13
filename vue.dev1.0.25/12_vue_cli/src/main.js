import Vue from 'vue'
var VueResource = require('vue-resource')
import App from './App.vue'

Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),
  data: {
    endpoint: 'https://jsonplaceholder.typicode.com/posts',
  },
  methods: {
    getAllPosts: function() {
      this.$http.get(this.endpoint).then(function(response){
        console.log(response)
      }, function(error){
        // error
      })
    }
  },
  created: function() {
    this.getAllPosts()
  }
})
