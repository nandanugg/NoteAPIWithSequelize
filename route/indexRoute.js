const express = require('express')
const app = express.Router()
const { Users } = require('../models')

app.get('/', async (req, res) => {
  const users = await Users.findAll()
  res.render('index', users)
})

module.exports = app