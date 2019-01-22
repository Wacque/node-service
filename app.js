
const express = require('express')
const app  = express()

// models
const { translate } = require('./models/translate.js')

app.get('/translate', translate)

app.listen(3003)

console.log('run in http://localhost:3003')