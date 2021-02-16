const express = require('express')
const { get, add, edit, remove } = require('../controller/notesController')
const app = express.Router()

app.get('/', async (req, res, next) => {
  const result = await get({
    userId: req.user.id,
  }).catch(next)
  res.send(result)
})

app.get('/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await get({
    id,
    userId: req.user.id,
  }).catch(next)
  res.send(result)
})

app.post('/', async (req, res, next) => {
  const result = await add({
    userId: req.user.id,
    ...req.body
  }).catch(next)
  res.send(result)
})

app.put('/:id', async (req, res, next) => {
  const { id } = req.params
  await edit(id, req.body).catch(next)
  res.send("ok")
})

app.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  await remove(id).catch(next)
  res.send("ok")
})

module.exports = app