const express = require('express')
const passport = require('passport')
const { celebrate, Joi, Segments } = require('celebrate')

const User = require('../models/user')

const router = express.Router()

// GET
router.get('/session', async (req, res) => {
  res.send(req.user)
})

router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  async (req, res, next) => {
    const { username, email, password } = req.body

    try {
      const user = await User.register({ username, email }, password)
      res.send(user)
    } catch (e) {
      next(e)
    }
  }
)

router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

router.delete('/session', async (req, res, next) => {
  await req.logout()

  req.session.regenerate(err => {
    if (err) return next(err)

    return res.sendStatus(200)
  })
})

module.exports = router
