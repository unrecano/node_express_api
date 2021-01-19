'use strict'

// Framework Backend.
const express = require('express')
// Parser para el cuerpo de las peticiones.
const bodyParser = require('body-parser')
const api = require('./routes')

// Crear app.
const app = express()

// Middelwares.
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app