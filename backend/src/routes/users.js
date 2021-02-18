const express = require('express')
const User = require('../models/user')

const router = express.Router()

// GET total list of users OR query for specific user ID
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.username) query.username = req.query.username

  const users = await User.find(query)

  console.log(users)

  if (users) res.render('users', { users })
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
  console.log('userid')
  const user = await User.findById(req.params.userId)

  if (user) res.render('users', { user })
  else res.sendStatus(404)
})

module.exports = router
