const { Categories } = require('../models')
const { nanoid } = require('nanoid')

function get(query) {
  return Categories.findAll({ where: query })
}

function add(data) {
  return Categories.create({
    id: nanoid(),
    ...data
  })
}

function edit(id, data) {
  return Categories.update(data, {
    where: { id }
  })
}

function remove(id) {
  return Categories.destroy({
    where: { id }
  })
}

module.exports = {
  add,
  get,
  edit,
  remove
}