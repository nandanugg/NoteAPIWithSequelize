const express = require('express')
const app = express.Router()
const { Users } = require('../models')
const { nanoid } = require('nanoid')

// https://sequelize.org/master/manual/model-querying-basics.html
app.get('/user', async (req, res, next) => {
  const { withNotes } = req.query
  const result = await Users.findAll(
    withNotes
      ? { include: 'notes' }
      : {}
  ).catch(next)
  res.send(result)
})
app.get('/user/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await Users.findAll({
    where: {
      // id: id,
      // if property name and value variable is on the same name, we can shorten it like this
      id
    }
  }).catch(next)
  res.send(result)
})
app.post('/user', async (req, res, next) => {
  const { username, password, firstName, lastName } = req.body
  const result = await Users.create({
    id: nanoid(),
    username,
    password,
    firstName,
    lastName
  }).catch(next)
  res.send(result)
})
app.put('/user/:id', async (req, res, next) => {
  const { id } = req.params
  await Users.update(req.body, {
    where: { id }
  }).catch(next)
  res.send("ok")
})
app.delete('/user/:id', async (req, res, next) => {
  const { id } = req.params
  await Users.destroy({
    where: { id }
  }).catch(next)
  res.send("ok")
})

module.exports = app