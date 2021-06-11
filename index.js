const express = require('express');
const { dbConnection } = require('./db/config');
require('dotenv').config()

// create server
const app = express();

// Mongo DB
dbConnection();

//Public dir
app.use( express.static('public') )

// body parse
app.use( express.json() )

// routes
app.use('/api/auth', require('./routes/auth'))

// listen to reqs
app.listen( process.env.PORT, () => {
    console.log('Server runnin on port', process.env.PORT)
} )