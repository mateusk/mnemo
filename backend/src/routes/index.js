const express = require('express')
const { user } = require('../models/dummydata')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { username: user.username })
})

module.exports = router
