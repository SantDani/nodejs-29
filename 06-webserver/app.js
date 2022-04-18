const express = require('express')
const app = express()
var hbs = require('hbs');

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {
    console.error(err);
});


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
    res.render('generic', {
        name: 'Santiago D',
        title: 'Node 29'
    })
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        name: 'Santiago D',
        title: 'Node 29'
    })
})



app.get('*', function (req, res) {
  res.sendFile(`${__dirname}/public/404.html`)
})

app.listen(PORT)