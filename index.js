const express = require('express')
require('dotenv').config()

// create server
const app = express();

//Public dir
app.use( express.static('public') )

// routes
// app.get('/', (req,res) => {
//     console.log('requires slash bro');
// })

// listen to reqs
app.listen( process.env.PORT, () => {
    console.log('Server runnin on port', process.env.PORT)
} )