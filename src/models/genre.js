const { Schema, model } = require('mongoose')

const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    mexLength: 50
  }
})

const Genre = model('Genre', genreSchema)


module.exports = { Genre, genreSchema }