const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()

const apiRouter = require('./routes/api.js')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', apiRouter)

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
