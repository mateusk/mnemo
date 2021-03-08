const express = require('express')
const Memory = require('../models/memory')
const Place = require('../models/place')

const router = express.Router()

router.get('/', async (req, res) => {
  const query = {}

  if (req.query.title) query.title = req.query.title

  const memories = await Memory.find(query)

  if (memories) res.send(memories)
  else res.sendStatus(404)
})

// GET
router.get('/initialize', async (req, res) => {
  const memplace = await Place.create({ name: 'Hasenheide Park', location: { type: 'Point', coordinates: [1, 1] } })

  const memory = await Memory.create({
    title: 'Saw an ET here',
    text: 'I swear it is the truth, it came as a fireball from the sky...',
    date: new Date(2003, 1, 31),
    place: memplace,
  })

  if (memory) res.render('memories', { memory })
  else res.sendStatus(404)
})

/* GET memory by id */
router.get('/:memoryId', async (req, res) => {
  const memory = await Memory.findById(req.params.memoryId)

  if (memory) res.render('memories', { memory })
  else res.sendStatus(404)
})

// POST new memory
router.post('/', async (req, res) => {
  const newMemory = await Memory.create(req.body)

  res.send(newMemory)
})

module.exports = router
