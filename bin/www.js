require('../model')
const app = require('../app')
const mongoose = require('mongoose')

const mongodbUrl = 'mongodb://123.56.246.220/exam'
const port = 30000

mongoose.connect(mongodbUrl, {useNewUrlParser: true});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  app.listen(port, () => {
    console.log('listen on 30000!')
  })
})