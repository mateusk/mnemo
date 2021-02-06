const express = require('express')
const { memories } = require('../models/dummydata')

const router = express.Router()

/* GET query for specific memory title */
router.get('/:title', (req, res) => {
  let result = memories.filter(memory => memory.title === req.params.title)
  if (result) {
    result = result.map(({ title, text, date, place: { name } }) => ({
      title,
      text,
      date: { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() },
      place: name,
    }))
  }
  res.render('mnemo', { result })
})

module.exports = router
