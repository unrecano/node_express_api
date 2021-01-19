'use strict'

module.exports = {
    port: process.env.PORT || 3001,
    mongodb: process.env.MONGODB || 'mongodb://localhost:27017/store',
    secretToken: 'misecrettoken'
}