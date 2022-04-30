require('dotenv').config()

const PORT = process.env.PORT;
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World ',)
})

app.listen(PORT, ()=> {
    console.log('Server running at ', PORT);
})