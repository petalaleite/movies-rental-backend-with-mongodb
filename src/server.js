const { connect } = require('mongoose')
const app = require('./app')

connect('mongodb://localhost:27017/FakeBlockbuster')
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Could not connect to MongoDB', error.message))

const port = process.env.PORT || 3010
app.listen(port, () => console.log(`Connected. Listening on port ${port}...`))
