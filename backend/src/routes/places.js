const express = require('express')
const { celebrate, Joi, Segments } = require('celebrate')

const Place = require('../models/place')

const router = express.Router()

// GET total list of places OR query for specific place name
router.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      name: Joi.string(),
    },
  }),
  async (req, res) => {
    const query = {}

    if (req.query.name) query.name = req.query.name

    const places = await Place.find(query)

    if (places) res.send(places)
    else res.sendStatus(404)
  }
)

// An endpoint to create collection with sample data in the DB, for testing purposes
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
router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      location: Joi.object().required(),
    },
  }),
  async (req, res) => {
    const newPlace = {
      name: req.body.name,
      location: req.body.location,
    }
    const createdPlace = await Place.create(newPlace)

    if (createdPlace) res.send(createdPlace)
    else res.sendStatus(404)
  }
)

module.exports = router
