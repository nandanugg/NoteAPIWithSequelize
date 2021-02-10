const express = require('express')
const app = express.Router()
const { users } = require('../models')
const { nanoid } = require('nanoid')

// https://sequelize.org/master/manual/model-querying-basics.html
app.get('/user', async (req, res) => {
  const { withNotes } = req.query
  const result = await users.findAll(
    withNotes
      ? { include: 'notes' }
      : {}
  ).catch(error => {
    throw error
  })

  res.send(result)
})
app.get('/user/:id', async (req, res) => {
  const { id } = req.params
  const result = await users.findAll({
    where: {
      // id: id
      // if property name and value variable is on the same name, we can shorten it like this
      id
    }
  })
  res.send(result)
})
app.post('/user', async (req, res) => {
  const { username, password, firstName, lastName } = req.body
  const result = await users.create({
    id: nanoid(),
    username,
    password,
    firstName,
    lastName
  })
  res.send(result)
})
app.put('/user/:id', async (req, res) => {
  const { id } = req.params
  await users.update(req.body, {
    where: { id }
  })
  res.send("ok")
})
app.delete('/user/:id', async (req, res) => {
  const { id } = req.params
  await users.destroy({
    where: { id }
  })
  res.send("ok")
})

module.exports = app