const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/productRoutes');

const app = express()

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use('/products', productRoutes)


// Start Server
const PORT = 5001
app.listen(PORT, (error) => {
    if (error) { 
        console.log(error)
    }
    else {console.log('App is live.')}
})