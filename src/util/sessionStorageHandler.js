const sessionStorageHandler = {
  dataName: 'ctData',
  setItem: function(name, value) {
    let obj = JSON.parse(window.sessionStorage.getItem(this.dataName))
    if(obj == null) {
      obj = {}
    }
    obj[name] = value
    window.sessionStorage.setItem(this.dataName, JSON.stringify(obj))
  },
  delItem: function(name) {
    let obj = JSON.parse(window.sessionStorage.getItem(this.dataName))
    if(obj === null) {
      console.info('ctData')
      return false
    }else{
      if(obj[name] !== undefined) {
        delete obj[name]
        window.sessionStorage.setItem(this.dataName, JSON.stringify(obj))
      }
    }
  },
  getItem: function(name) {
    let obj = JSON.parse(window.sessionStorage.getItem(this.dataName))
    if(obj !== null && obj[name] !== undefined) {
      return obj[name]
    }else{
      return null
    }
  },
  die: function() {
    window.sessionStorage.removeItem(this.dataName)
  },
  list: function() {
  }
}
window.LSH = sessionStorageHandler

export default sessionStorageHandler
