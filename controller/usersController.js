const { Users } = require('../models')
const { nanoid } = require('nanoid')

function get(query) {
  return Users.findAll({ where: query })
}

function add(data) {
  return Users.create({
    id: nanoid(),
    ...data
  })
}

function edit(id, data) {
  return Users.update(data, {
    where: { id }
  })
}

function remove(id) {
  return Users.destroy({
    where: { id }
  })
}

module.exports = {
  add,
  get,
  edit,
  remove
}