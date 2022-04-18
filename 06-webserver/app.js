const express = require('express')
const app = express()

app.set('view engine', 'hbs');

const PORT = 8080

// Serve static content
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.render('home', {
      name: 'Santiago D',
      title: 'Node 29'
  })
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