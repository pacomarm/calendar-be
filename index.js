const express = require('express');
const { dbConnection } = require('./db/config');
const cors = require('cors')
require('dotenv').config()

// create server
const app = express();

// Mongo DB
dbConnection();

//cors
app.use(cors())

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