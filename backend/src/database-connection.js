const mongoose = require('mongoose')

const dbUsername = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbProtocol = process.env.DB_PROT
const dbParams = process.env.DB_PARAMS

let dbConnectionString = `${dbProtocol}://${dbHost}:${dbPort}/${dbName}`
if (dbUsername !== undefined)
  dbConnectionString = `${dbProtocol}://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?${dbParams}`

mongoose.set('debug', true)

mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(console.log)
