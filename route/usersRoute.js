const express = require('express')
const UserControler = require('../controller/usersController')
const user = new UserControler()
const app = express.Router()

app.get('/', async (req, res, next) => {
  const result = await user.get().catch(next)
  res.send(result)
})

app.get('/:id', async (req, res, next) => {
  const { id } = req.params
  const result = await user.get({ id }).catch(next)
  res.send(result)
})

app.post('/', async (req, res, next) => {
  const result = await user.add(req.body).catch(next)
  res.send(result)
})

app.put('/:id', async (req, res, next) => {
  const { id } = req.params
  await user.edit(id, req.body).catch(next)
  res.send("ok")
})

app.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  await user.remove(id).catch(next)
  res.send("ok")
})

module.exports = app