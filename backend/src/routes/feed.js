const express = require('express')
const { memories } = require('../models/dummydata')

const router = express.Router()

router.get('/', (req, res) => {
  const mnemos = memories.map(({ title, text, date, place: { name } }) => ({
    title,
    text,
    date: { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() },
    place: name,
  }))
  // res.send(result)
  res.render('feed', { mnemos })
})

module.exports = router
