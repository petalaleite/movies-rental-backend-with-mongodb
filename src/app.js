const express = require('express');
const genreRouter = require('./routes/genre.routes');
const movieRoutes = require('./routes/movie.routes');
const customerRouter = require('./routes/customer.routes');
const rentalRouter = require('./routes/rental.routes');

const app = express();

app.use(express.json());
app.use('/genres', genreRouter);
app.use('/movies', movieRoutes);
app.use('/customers', customerRouter);
app.use('/rentals', rentalRouter);

module.exports = app;