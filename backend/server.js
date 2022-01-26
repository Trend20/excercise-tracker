const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// use middlewares
app.use(cors());
app.use(express.json());

// declare the PORT
const PORT = process.env.PORT || 5500;

// listen to the port
app.listen(() =>{
  console.log(`Application is listening on port ${PORT}`);
})