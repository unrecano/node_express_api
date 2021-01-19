'use strict'

// Importar Model.
const Product = require('../models/product')

function all(request, response) {
    Product.find({}, (error, products) => {
        if (error) return response.status(500).send({message: `Error ${error}`})
        response.status(200).send({ products }) 
    })
}

function get(request, response) {
    let productId = request.params.id
    Product.findById(productId, (error, product) => {
        if (error) return response.status(500).send({message: `Error ${error}`})
        if (!product) return response.status(404).send({message: `Not found`})
        response.status(200).send({ product })
    })
}

function save(request, response) {
    let product = new Product()
    product.name = request.body.name
    product.picture = request.body.picture
    product.price = request.body.price
    product.category = request.body.category
    product.description = request.body.description
    product.save((error, productStored) => {
        if (error) return response.status(500).send({message: `Error: ${error}.`})
        response.status(201).send({product: productStored})
    })
}

function remove(request, response) {
    let productId = request.params.id
    Product.findById(productId, (error, product) => {
        if (error) return response.status(500).send({message: `Error: ${error}`})

        product.remove((error) => {
            if (error) return response.status(500).send({message: `Error: ${error}`})
            response.status(200).send({})
        })
    })
}

function update(request, response) {
    let productId = request.params.id
    let fields = request.body
    Product.findByIdAndUpdate(productId, fields, (error, productUpdated) => {
        if (error) return response.status(500).send({message: `Error: ${error}`})

        response.status(200).send({product: productUpdated})
    })
}

module.exports = {
    all,
    get,
    save,
    remove,
    update
}