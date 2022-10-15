import Queue from "./Queue.js"

const queue = new Queue()

// console.log(queue.peek())
console.log(queue.is_empty())
// console.log(queue.add(9))
queue.add(10)
queue.add(11)
queue.add(12)
queue.add(13)
queue.add(14)
queue.add(15)
queue.add(16)
queue.add(17)
queue.add(18)
queue.add(19)
queue.add(20)

console.log(queue.add(21))
console.log(queue.offer1(22))
console.log(queue.offer2(23))

console.log(queue.items)
console.log(queue.peek())

console.log(queue.poll())
console.log(queue.items)

console.log(queue.remove())
console.log(queue.items)

console.log(queue.size())
console.log(queue.is_empty())
