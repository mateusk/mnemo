const mongoose = require('mongoose')

const connectionString = process.env.DB_CONNECTION_STRING

if (connectionString === undefined || connectionString === '') throw Error('Database connection string not defined')

mongoose.set('debug', false)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection established'))
  .catch(e => {
    throw Error(e)
  })
