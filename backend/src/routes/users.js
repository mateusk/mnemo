const express = require('express')
const { celebrate, Joi, Segments } = require('celebrate')
const User = require('../models/user')

const router = express.Router()

// GET total list of users OR query for specific user ID
router.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      username: Joi.string(),
      email: Joi.string(),
    },
  }),
  async (req, res) => {
    const query = {}

    if (req.query.username) query.username = req.query.username

    if (req.query.email) query.email = req.query.email

    const users = await User.find(query)

    if (users) res.send(users)
    else res.sendStatus(404)
  }
)

// An endpoint to create collection with sample data in the DB, for testing purposes
router.get('/initialize', async (req, res) => {
  const newUser = new User({ username: 'Mateus', email: 'mateus@me.com' })
  await newUser.setPassword('test')
  await newUser.save()

  if (newUser) res.send(newUser)
  else res.sendStatus(404)
})

// GET users by ID
router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.send(user)
  else res.sendStatus(404)
})

module.exports = router
