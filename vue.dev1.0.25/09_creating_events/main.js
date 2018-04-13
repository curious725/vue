Vue.component('message',{
  template: '<input v-model="message" @keyup.enter="saveMessage">',
  data: function() {
    return {
      message: ''
    }
  },
  methods: {
    saveMessage: function() {
      console.log(this.message)
    }
  }
})

new Vue({
  el: 'body',
})
