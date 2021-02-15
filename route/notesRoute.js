const express = require('express')
const app = express.Router()
const { Notes } = require('../models')
const { nanoid } = require('nanoid')

app.get('/note', async (req, res, next) => {
  const { withNotes } = req.query
  const result = await Notes.findAll(
    withNotes
      ? { include: 'Notes' }
      : {}
  ).catch(next)
  res.send(result)
})
app.get('/note/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await Notes.findAll({
    where: { id }
  }).catch(next)
  res.send(result)
})
app.post('/note', async (req, res, next) => {
  const { note, categoryId, userId } = req.body
  const result = await Notes.create({
    id: nanoid(),
    note,
    categoryId,
    userId
  }).catch(next)
  res.send(result)
})
app.put('/note/:id', async (req, res, next) => {
  const { id } = req.params
  await Notes.update(req.body, {
    where: { id }
  }).catch(next)
  res.send("ok")
})
app.delete('/note/:id', async (req, res, next) => {
  const { id } = req.params
  await Notes.destroy({
    where: { id }
  }).catch(next)
  res.send("ok")
})

module.exports = app