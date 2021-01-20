'use strict'

// Framework Backend.
const express = require('express')
// Parser para el cuerpo de las peticiones.
const bodyParser = require('body-parser')
// Routes.
const api = require('./routes')
// Templates.
const hbs = require('express-handlebars')

// Crear app.
const app = express()

// Middelwares.
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api', api)
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

// Views.
app.get('/login', (request, response) => {
    response.render('login')
})

module.exports = app