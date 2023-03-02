const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

app.listen(8080)
// module.exports = app
