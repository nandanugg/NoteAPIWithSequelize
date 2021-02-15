const { Notes } = require('../models')
const { nanoid } = require('nanoid')

function get(query) {
  return Notes.findAll({ where: query })
}

function add(data) {
  return Notes.create({
    id: nanoid(),
    ...data
  })
}

function edit(id, data) {
  return Notes.update(data, {
    where: { id }
  })
}

function remove(id) {
  return Notes.destroy({
    where: { id }
  })
}

module.exports = {
  add,
  get,
  edit,
  remove
}