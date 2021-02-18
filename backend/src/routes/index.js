const express = require('express')
const User = require('../models/user')

const router = express.Router()

/* GET home page. */
router.get('/', async (req, res) => {
  const user = await User.find({ username: 'Mateus' })
  res.render('index', { username: user.username })
})

module.exports = router
