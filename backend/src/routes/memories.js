const express = require('express')
const { celebrate, Joi, Segments } = require('celebrate')

const Memory = require('../models/memory')
const Place = require('../models/place')

const router = express.Router()

router.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      title: Joi.string(),
    },
  }),
  async (req, res) => {
    const query = {}

    if (req.query.title) query.title = req.query.title
    if (req.query.place) query.place = req.query.place

    const memories = await Memory.find(query)

    if (memories) res.send(memories)
    else res.sendStatus(404)
  }
)

// An endpoint to create collection with sample data in the DB, for testing purposes
router.get('/initialize', async (req, res) => {
  const berlin = await Place.create({ name: 'Berlin', location: { type: 'Point', coordinates: [1, 1] } })
  const barcelona = await Place.create({ name: 'Barcelona', location: { type: 'Point', coordinates: [1, 1] } })

  const newMemories = await Memory.create(
    {
      title: 'Once upon a time...',
      text: '... there was life without a mask. I kid you not!',
      date: new Date(2002, 1, 31),
      place: berlin,
    },
    {
      title: 'Saw an ET here',
      text: 'I swear it is the truth, it came as a fireball from the sky...',
      date: new Date(2003, 1, 31),
      place: berlin,
    },
    {
      title: 'The best place on Earth',
      text: 'So many good memories here.',
      date: new Date(2003, 1, 31),
      place: barcelona,
    },
    {
      title: 'Currywurst',
      text: 'Die beste!',
      date: new Date(2004, 1, 31),
      place: berlin,
    }
  )

  if (newMemories) res.send(newMemories)
  else res.sendStatus(404)
})

/* GET memory by id */
router.get('/:memoryId', async (req, res) => {
  const memory = await Memory.findById(req.params.memoryId)

  if (memory) res.send(memory)
  else res.sendStatus(404)
})

// POST new memory
router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      text: Joi.string().required(),
      date: Joi.date().required(),
      place: Joi.string().required(),
    },
  }),
  async (req, res) => {
    const newMemory = {
      title: req.body.title,
      text: req.body.text,
      date: req.body.date,
      place: req.body.place,
    }

    const createdMemory = await Memory.create(newMemory)

    if (createdMemory) res.send(createdMemory)
    else res.sendStatus(400)
  }
)

module.exports = router
