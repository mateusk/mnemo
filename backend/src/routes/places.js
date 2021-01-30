const express = require('express')
const Place = require('../models/place')

const router = express.Router()

const places = [
  new Place('Berlin', { latitude: 1, longitude: 1 }),
  new Place('Buenos Aires', { latitude: 1, longitude: 1 }),
  new Place('Mexico City', { latitude: 1, longitude: 1 }),
]

/* GET total list of places OR query for specific place name */
router.get('/', (req, res) => {
  let result = places
  if (req.query.name) result = places.filter(place => place.name === req.query.name)
  res.send(result)
})

/* GET places by ID */
router.get('/:placeId', (req, res) => {
  res.send(places[req.params.placeId])
})

module.exports = router
