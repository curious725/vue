var vmSwitchClass = new Vue({
  el: '#switch-class',
  data: {
    isActive: true,
    hasError: false
  }
})

var vmComputedClass = new Vue({
  el: '#computed-class',
  data: {
    isActive: true,
    hasError: false
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.hasError,
        'text-danger': !this.isActive && this.hasError
      }
    }
  } 
})

var vmStyle = new Vue({
  el: '#sample-style',
  data: {
    activeColor: 'red',
    fontSize: 20
  }
})

var vmStyleBetter = new Vue({
  el: '#sample-style-better',
  data: {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
})
