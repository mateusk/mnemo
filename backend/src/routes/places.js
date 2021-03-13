const express = require('express')
const Place = require('../models/place')

const router = express.Router()

// GET total list of places OR query for specific place name
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) query.name = req.query.name

  const places = await Place.find(query)

  if (places) res.send(places)
  else res.sendStatus(404)
})

// Initialize DB with some data:
router.get('/initialize', async (req, res) => {
  const newPlace = await Place.create({ name: 'Berlin', location: { type: 'Point', coordinates: [1, 1] } })
  if (newPlace) res.send(newPlace)
  else res.sendStatus(404)
})

// GET places by ID
router.get('/:placeId', async (req, res) => {
  const place = await Place.findById(req.query.placeId)
  if (place) res.send(place)
  else res.sendStatus(404)
})

// POST new place
router.post('/', async (req, res) => {
  const newPlace = await Place.create(req.body)

  if (newPlace) res.send(newPlace)
  else res.sendStatus(404)
})

module.exports = router
