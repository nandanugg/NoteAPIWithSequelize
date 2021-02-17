const express = require('express')
const UserControler = require('../controller/usersController')
const user = new UserControler()
const app = express.Router()

app.post('/register', async (req, res) => {
  const { username, password } = req.body
  const result = await user.register(username, password)
  res.send(result)
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  const result = await user.login(username, password)
  res.send(result)
})

module.exports = app