const express = require('express')
const app = express()

const PORT = 8080

// Serve static content
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Home Page')
})

app.get('/generic', function (req, res) {
  res.sendFile(`${__dirname}/public/generic.html`)
})

app.get('/elements', function (req, res) {
  res.sendFile(`${__dirname}/public/elements.html`)
})



app.get('*', function (req, res) {
  res.sendFile(`${__dirname}/public/404.html`)
})

app.listen(PORT)