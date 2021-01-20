'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function signUp (request, response) {
    const user = new User({
        email: request.body.email,
        username: request.body.username
    })

    user.save((error) => {
        if (error) return response.status(500).send({message: `Error: ${error}`})
        return response.status(201).send({token: service.createToken(user)})
    })
}

function singIn(request, response) {
    User.find({email: request.body.email}, (error, user) => {
        if (error) return response.status(500).send({message: `Error ${error}.`})
        if (!user[0]) return response.status(404).send({message: 'Not Found.'})

        request.user = user
        response.status(200).send({token: service.createToken(user)})
    })
}

module.exports = {
    signUp,
    singIn
}