// To use an environment variable, require the dotenv library
require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
app.use(function (error, req, res, next) {
  res.send(error)
})

const indexRoute = require('./route/indexRoute')
const usersRoute = require('./route/usersRoute')
const categoriesRoute = require('./route/categoriesRoute')
const notesRoute = require('./route/notesRoute')

app.use(indexRoute, usersRoute, categoriesRoute, notesRoute)


// port is also a sensitive information, because each developer have their own port of choice
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is listening on http://127.0.0.1:${port}`);
})