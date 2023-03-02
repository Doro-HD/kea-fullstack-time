const path = require('path')
const express = require('express')
const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

module.exports = app
