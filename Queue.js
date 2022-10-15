class Queue {
  constructor() {
    this.items = []
    this.limit = 10
  }

  add(element) {
    if (this.items.length < this.limit) {
      	this.items.push(element)
        return true
    }
    return false
  }

  element() {
    return this.items[0]
  }

  offer1(element) {
    this.items.push(element)
    return true
  }

  offer2(element) {
    if (this.items.length >= this.limit) {
      this.items.length = this.items.length - 1
      this.items.push(element)
      return true
    }
    return false
  }
  
  peek() {
    if (this.items.length === 0)
      return null
    return this.items[0]
  }

  poll(){
    if (this.items.length === 0)
      return null
    const aux = this.items[0]
    this.items.shift()
    return aux
  }

  remove() {
    const aux = this.items[0]
    this.items.shift()
    return aux
  }

  size() {
    return this.items.length
  }

  is_empty() {
    return this.items.length === 0
  }

}

export default Queue
