// needs clarification with reversedMessage
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hi this is example'
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('') + Date.now()
    }
  },
  methods: {
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('') + Date.now()
    }
  }
})

var vmName = new Vue({
  el: '#name',
  data: {
    firstName: 'Ivan',
    lastName: 'Ivanov'
  },
  computed: {
    fullName: {
      get: function() {
        if (this.lastName == '') {
          return this.firstName 
        } else {
          return this.firstName + ' ' + this.lastName
        }
      },
      set: function (fullname) {
        var names = fullname.split(' ')
        this.firstName = names[0]
        if (names.length -1 == 0) {
          this.lastName = ''
        } else {
          this.lastName = names[names.length - 1]
        }
      }
    }
  }
})
