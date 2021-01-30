const express = require('express')
const { memories } = require('../models/dummydata')

const router = express.Router()

/* GET query for specific memory title */
router.get('/', (req, res) => {
  let result = []
  if (req.query.title) {
    result = memories.filter(memory => memory.title === req.query.title)
    result = result.map(({ title, text, date, place: { name } }) => ({
      title,
      text,
      date: { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() },
      place: name,
    }))
  }
  // res.send(result)
  res.render('mnemo', { result })
})

module.exports = router
