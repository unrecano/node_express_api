'use strict' // Use for last improves for JS.

// ORM para mongodb.
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

// Conecta a base de datos.
let params = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(config.mongodb, params, (error) => {
    if (error) {
        throw error
    }
    console.log("Conection successful")

    // Inicia servidor API.
    app.listen(config.port, () => {
        console.log(`API REST en http://localhost:${config.port}.`)
    })
})