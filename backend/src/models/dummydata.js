const Place = require('./place')
const Memory = require('./memory')

const places = [
  new Place('Berlin', { latitude: 1, longitude: 1 }),
  new Place('Berlin Hauptbahnhof', { latitude: 1, longitude: 1 }),
  new Place('Hasenheide Park', { latitude: 1, longitude: 1 }),
]

const memories = [
  new Memory('An unforgetable day', "This day was awesome, I'll never forget it", new Date(1995, 11, 17), places[0]),
  new Memory(
    'I met my wife here 20 years ago',
    'My wife and I first met here 20 years ago.',
    new Date(2003, 1, 31),
    places[1]
  ),
  new Memory(
    'Saw an ET here',
    'It came as a great fireball from the sky and landed on the hill close to Columbiadamm',
    new Date(1991, 7, 11),
    places[2]
  ),
]

module.exports = { places, memories }
