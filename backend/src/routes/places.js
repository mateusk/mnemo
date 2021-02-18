const express = require('express')
const Place = require('../models/place')

const router = express.Router()

/* GET total list of places OR query for specific place name */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) query.name = req.query.name

  const places = await Place.find(query)

  console.log(places)

  if (places) res.render('places', { places })
  else res.sendStatus(404)
})

// GET
router.get('/initialize', async (req, res) => {
  const place = await Place.create({ name: 'Berlin', location: { type: 'Point', coordinates: [1, 1] } })
  if (place) res.render('places', { place })
  else res.sendStatus(404)
})

/* GET places by ID */
router.get('/:placeId', async (req, res) => {
  const place = await Place.findById(req.query.placeId)
  res.render('places', { place })
})

module.exports = router
