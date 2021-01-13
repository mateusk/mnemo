const express = require('express')

const User = require('./user')
const Memory = require('./memory')
const Place = require('./place')

const mateus = new User('Mateus', 'me@mateus.com')
const berlin = new Place('Berlin', { latitude: 1, longitude: 1 })
const mateusMemory = new Memory('A nice day', 'Once upon a time...', berlin)

mateus.createMemory(mateusMemory)

const paloma = new User('Paloma', 'p@paloma.com')
paloma.favoriteMemory(mateusMemory)
paloma.favoritePlace(berlin)

console.log(mateus.profile)
console.log(berlin)
console.log(mateusMemory)

const app = express()
app.listen(8081)
