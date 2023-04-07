const express = require('express')
const genreRouter = require('./routes/genre.routes')
const movieRoutes = require('./routes/movie.routes')
const app = express()

app.use(express.json())
app.use('/genres', genreRouter)
app.use('/movies', movieRoutes)


module.exports = app