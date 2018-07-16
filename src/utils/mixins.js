var mixin = {
  data () {
    return {

    }
  },
  methods: {
    formatDate (inputTime) {
      if (typeof inputTime === 'string') {
        inputTime = Number(inputTime)
      }
      var date = new Date(inputTime)
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      var d = date.getDate()
      d = d < 10 ? ('0' + d) : d

      console.log(y + m + d)
      return y + '-' + m + '-' + d
    }
  }
}

export default mixin
