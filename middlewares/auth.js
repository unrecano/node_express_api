'use strict'

const services = require('../services')

function isAuth(request, response, next) {
    if (!request.headers.authorization) {
        return response.status(401).send({message: 'Unauthorized.'})
    }

    const token = request.headers.authorization.split(" ")[1]
    services.decodeToken(token).then(response =>{
        request.user = response
        next()
    }).catch(res => {
        response.status(res.status)
    })
}

module.exports = isAuth