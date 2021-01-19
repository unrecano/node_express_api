'use strict'

const express = require('express')
const api = express.Router()

// Controllers.
const ProductController = require('../controllers/product')
const AuthController = require('../controllers/auth')

// Routes

/*
* request.params obtiene los parámetros de la URI especificados.
* request.query obtiene los parámetros enviados por query.
*/

api.get('/products', ProductController.all)
api.get('/products/:id', ProductController.get)
api.post('/products', ProductController.save)
api.put('/products/:id', ProductController.update)
api.delete('/products/:id', ProductController.remove)

api.post('/signUp', AuthController.signUp)
api.post('/signIn', AuthController.singIn)

module.exports = api