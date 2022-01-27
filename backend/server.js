const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');


const app = express();

require('dotenv').config();

// use middlewares
app.use(cors());
app.use(express.json());

// connect to the database
const url = process.env.DATABASE_URL;
mongoose.connect(url);
// , {useNewUrlPaser: true, useCreateIndex: true}

// declare connection
const connection = mongoose.connection;

connection.once('open', () =>{
  console.log('Application is connected to the database successfully!');
})

// declare the PORT
const PORT = process.env.PORT || 5500;

// listen to the port
app.listen(PORT, () =>{
  console.log(`Application is listening on port ${PORT}`);
});