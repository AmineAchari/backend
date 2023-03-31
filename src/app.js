const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan');



const app = express()
// ----------- DB Config -----------//
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to the database');
});
mongoose.connection.on('error', (err) => {
  console.error(`Failed to connected to the database: ${err}`);
});

// ----------- Middlewares -----------//
app.use(logger('dev'));


module.exports = app