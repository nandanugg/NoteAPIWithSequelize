const express = require('express')
const app = express.Router()

app.get('/', async (req, res) => {
  res.send("Welcome to Notes API")
})

module.exports = app