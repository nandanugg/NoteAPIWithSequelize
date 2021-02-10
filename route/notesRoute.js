const express = require('express')
const app = express.Router()
const { notes } = require('../models')
const { nanoid } = require('nanoid')

// https://sequelize.org/master/manual/model-querying-basics.html
app.get('/note', async (req, res) => {
  const { withNotes } = req.query
  const result = await notes.findAll(
    withNotes
      ? { include: 'notes' }
      : {}
  ).catch(error => {
    throw error
  })

  res.send(result)
})
app.get('/note/:id', async (req, res) => {
  const { id } = req.params
  const result = await notes.findAll({
    where: {
      id
    }
  })
  res.send(result)
})
app.post('/note', async (req, res) => {
  const { note, categoryId, userId } = req.body
  const result = await notes.create({
    id: nanoid(),
    note,
    categoryId,
    userId
  })
  res.send(result)
})
app.put('/note/:id', async (req, res) => {
  const { id } = req.params
  await notes.update(req.body, {
    where: { id }
  })
  res.send("ok")
})
app.delete('/note/:id', async (req, res) => {
  const { id } = req.params
  await notes.destroy({
    where: { id }
  })
  res.send("ok")
})

module.exports = app