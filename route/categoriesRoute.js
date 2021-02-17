const express = require('express')
const CategoryController = require('../controller/categoriesController')
const category = new CategoryController()
const app = express.Router()

app.get('/', async (req, res, next) => {
  const result = await category.get().catch(next)
  res.send(result)
})

app.get('/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await category.get({ id }).catch(next)
  res.send(result)
})

app.post('/', async (req, res, next) => {
  const result = await category.add(req.body).catch(next)
  res.send(result)
})

app.put('/:id', async (req, res, next) => {
  const { id } = req.params
  await category.edit(id, req.body).catch(next)
  res.send("ok")
})

app.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  await category.remove(id).catch(next)
  res.send("ok")
})

module.exports = app