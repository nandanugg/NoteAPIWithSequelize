const express = require('express')
const NoteController = require('../controller/notesController')
const note = new NoteController()
const app = express.Router()

app.get('/', async (req, res, next) => {
  const result = await note.get({
    userId: req.user.id,
  }).catch(next)
  res.send(result)
})

app.get('/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await note.get({
    id,
    userId: req.user.id,
  }).catch(next)
  res.send(result)
})

app.post('/', async (req, res, next) => {
  const result = await note.add({
    userId: req.user.id,
    ...req.body
  }).catch(next)
  res.send(result)
})

app.put('/:id', async (req, res, next) => {
  const { id } = req.params
  await note.edit(id, req.body).catch(next)
  res.send("ok")
})

app.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  await note.remove(id).catch(next)
  res.send("ok")
})

module.exports = app