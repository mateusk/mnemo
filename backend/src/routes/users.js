const express = require('express')
const User = require('../models/user')

const router = express.Router()

// GET total list of users OR query for specific user ID
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.username) query.username = req.query.username

  const users = await User.find(query)

  if (users) res.send(users)
  else res.sendStatus(404)
})

// GET
router.get('/initialize', async (req, res) => {
  const user = await User.create({ username: 'Mateus', email: 'mateus@me.com' })
  if (user) res.render('users', { user })
  else res.sendStatus(404)
})

// GET users by ID
router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('users', { user })
  else res.sendStatus(404)
})

// POST new user
router.post('/', async (req, res) => {
  const newUser = await User.create(req.body)

  if (newUser) res.send(newUser)
  else res.sendStatus(404)
})

module.exports = router
