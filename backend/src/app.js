const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')

const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const cors = require('cors')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const { errors } = require('celebrate')

const User = require('./models/user')

const mongooseConnection = require('./database-connection')

const indexRouter = require('./routes/index')
const placesRouter = require('./routes/places')
const memoriesRouter = require('./routes/memories')
const usersRouter = require('./routes/users')
const accountRouter = require('./routes/account')

const app = express()

app.use(helmet())

app.use(
  cors({
    origin: true,
    credentials: true,
  })
)

if (app.get('env') == 'development') {
  /* eslint-disable-next-line */
  app.use(require('connect-livereload')())
}

app.set('trust proxy', 1)

// adding Moment.js support
app.locals.moment = require('moment')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(mongoSanitize({ replaceWith: '_' }))

app.use(cookieParser())

app.use(
  session({
    secret: [process.env.BACKEND_SESSION_SECRET_1, process.env.BACKEND_SESSION_SECRET_2],
    store: new MongoStore({ mongooseConnection, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/api',
      sameSite: process.env.NODE_EV == 'production' ? 'none' : 'strict',
      secure: process.env.NODE_EV == 'production',
    },
  })
)
app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/', indexRouter)
app.use('/api/places', placesRouter)
app.use('/api/memories', memoriesRouter)
app.use('/api/users', usersRouter)
app.use('/api/account', accountRouter)

app.use(errors())

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // handle error
  res.status(err.status || 500)
  res.send(500)
})

module.exports = app
