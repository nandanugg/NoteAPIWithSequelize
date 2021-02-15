const express = require('express')
const app = express.Router()
const { Categories } = require('../models')
const { nanoid } = require('nanoid')

app.get('/category', async (req, res) => {
  const { withNotes } = req.query
  const result = await Categories.findAll(
    withNotes
      ? { include: 'notes' }
      : {}
  ).catch(next)
  res.send(result)
})
app.post('/category', async (req, res) => {
  const { name } = req.body
  const result = await Categories.create({
    id: nanoid(),
    name
  }).catch(next)
  res.send(result)
})
app.put('/category/:id', async (req, res) => {
  const { id } = req.params
  await Categories.update(req.body, {
    where: { id }
  }).catch(next)
  res.send("ok")
})
app.delete('/category/:id', async (req, res) => {
  const { id } = req.params
  await Categories.destroy({
    where: { id }
  }).catch(next)
  res.send("ok")
})

module.exports = app