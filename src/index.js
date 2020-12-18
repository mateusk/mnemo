const User = require('./user')
const Memory = require('./memory')

const userA = new User('Mateus', 'me@mateus.com')
const memUserA = new Memory('Once upon a time...', 'Berlin')
userA.addMemory(memUserA)
// console.log(userA.memories)

const userB = new User('Paloma', 'p@paloma.com')
userB.favoriteMemory(memUserA)
// console.log(userA.memories.find(item => item === memUserA).favoriteCount)
