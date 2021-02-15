const express = require('express')
const { get, add, edit, remove } = require('../controller/categoriesController')
const app = express.Router()

app.get('/', async (req, res) => {
  const result = await get()
  res.send(result)
})

app.get('/:id', async (req, res) => {
  const { id } = req.params
  const result = await get({ id })
  res.send(result)
})

app.post('/', async (req, res) => {
  const result = await add({
    ...req.body
  })
  res.send(result)
})

app.put('/:id', async (req, res) => {
  const { id } = req.params
  await edit({ id })
  res.send("ok")
})

app.delete('/:id', async (req, res) => {
  const { id } = req.params
  await remove({ id })
  res.send("ok")
})

module.exports = app