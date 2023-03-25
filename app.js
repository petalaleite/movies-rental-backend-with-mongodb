const express = require('express')
const genreRouter = require('./src/routes/genre.routes')
const app = express()

app.use(express.json())
app.use('/genres', genreRouter)


module.exports = app