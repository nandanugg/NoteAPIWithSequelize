// To use an environment variable, require the dotenv library
require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

app.use('/', require('./route/indexRoute'))
app.use('/user', require('./route/usersRoute'))
app.use('/category', require('./route/categoriesRoute'))
app.use('/note', require('./route/notesRoute'))

app.use(function (error, req, res, next) {
  res.send(error)
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is listening on http://127.0.0.1:${port}`);
})