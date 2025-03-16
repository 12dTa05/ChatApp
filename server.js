const express = require('express');
const errorHandler = require('./middleware/errorhandler.js');
const connectDB = require('./config/dbConnection.js');
const dotenv = require('dotenv').config();

connectDB();
const app = express()

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes.js'));
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`${port}`)
})