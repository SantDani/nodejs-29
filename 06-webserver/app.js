const express = require('express')
require('dotenv').config(); // read ENV from .env
const app = express()
var hbs = require('hbs');

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {
    if(err) console.error(err);
});


const PORT =  process.env.PORT;

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

console.log(`Server is listening at http://localhost:${PORT}`)
app.listen(PORT)