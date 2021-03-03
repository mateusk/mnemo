const mongoose = require('mongoose')

const dbUsername = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const dbHost = process.env.DB_HOST
const dbProtocol = process.env.DB_PROT
const dbParams = process.env.DB_PARAMS

let dbConnectionString = `${dbProtocol}://${dbHost}/${dbName}`
if (dbUsername !== '')
  dbConnectionString = `${dbProtocol}://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?${dbParams}`

mongoose.set('debug', true)

mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(console.log)
