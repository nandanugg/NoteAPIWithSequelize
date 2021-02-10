const express = require('express')
const app = express.Router()
const { categories } = require('../models')
const { nanoid } = require('nanoid')

// https://sequelize.org/master/manual/model-querying-basics.html
app.get('/category', async (req, res) => {
  const { withNotes } = req.query
  const result = await categories.findAll(
    withNotes
      ? { include: 'notes' }
      : {}
  )
  res.send(result)
})
app.post('/category', async (req, res) => {
  const { name } = req.body
  const result = await categories.create({
    id: nanoid(),
    name
  })
  res.send(result)
})
app.put('/category/:id', async (req, res) => {
  const { id } = req.params
  await categories.update(req.body, {
    where: { id }
  })
  res.send("ok")
})
app.delete('/category/:id', async (req, res) => {
  const { id } = req.params
  await categories.destroy({
    where: { id }
  })
  res.send("ok")
})

module.exports = app