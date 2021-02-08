const express = require('express')
const { places } = require('../models/dummydata')

const router = express.Router()

/* GET total list of places OR query for specific place name */
router.get('/', (req, res) => {
  let result = places
  if (req.query.name) {
    result = places.filter(place => place.name === req.query.name)
  }
  res.render('places', { result })
})

/* GET places by ID */
router.get('/:placeId', (req, res) => {
  const result = [places[req.params.placeId]]
  res.render('places', { result })
})

module.exports = router
