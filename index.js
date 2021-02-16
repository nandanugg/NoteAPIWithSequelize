// To use an environment variable, require the dotenv library
require('dotenv').config()
const express = require('express')
const passport = require('./middleware/passportMiddleware')

const app = express()
const restrict = passport.authenticate('jwt', { session: false })

app.use(express.json())

app.use('/', require('./route/indexRoute'))
app.use('/auth', require('./route/authRoute'))
app.use('/user', restrict, require('./route/usersRoute'))
app.use('/category', restrict, require('./route/categoriesRoute'))
app.use('/note', restrict, require('./route/notesRoute'))

app.use(function (error, req, res, next) {
  res.send(error)
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is listening on http://127.0.0.1:${port}`);
})