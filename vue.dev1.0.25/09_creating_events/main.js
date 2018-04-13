Vue.component('message',{
  template: '<input v-model="message" @keyup.enter="saveMessage">',
  data: function() {
    return {
      message: ''
    }
  },
  methods: {
    saveMessage: function() {
      this.$emit('message-saved', this.message)

      this.message = ''
    }
  }
})

app = new Vue({
  el: 'body',
  data: {
    messages: []
  },
  methods: {
    handleMessage: function(message){
      console.log(message)
      this.messages.push(message)

    }
  }
})
