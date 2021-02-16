const { Users } = require('../models')
const { nanoid } = require('nanoid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

async function register(username, password) {
  const encryptedPassword = await bcrypt.hash(password, 5)
  const id = nanoid()
  const payload = {
    id,
    username,
  }
  await Users.create({
    ...payload,
    password: encryptedPassword
  })
  payload.token = jwt.sign({ id }, process.env.JWT_SECRET)
  return payload
}

async function login(username, password) {
  const user = await Users.findOne({
    where: { username }
  })
  if (await bcrypt.compare(password, user.password)) {
    const payload = {
      id: user.id,
      username: user.username,
      token: jwt.sign({ id: user.id }, process.env.JWT_SECRET)
    }
    return payload
  } else {
    return "wrong password"
  }
}


module.exports = {
  add,
  get,
  edit,
  remove,
  register,
  login
}