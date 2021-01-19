'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
    email: {type: String, unique: true, lowercase: true},
    username: String,
    avatar: String,
    password: {type: String, select: false},
    created: {type: Date, default: Date.now()},
    lastLogin: Date
})

UserSchema.pre('save', function (next) {
    let user = this
    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10, (error, salt) => {
        if (error) return next(error)

        bcrypt.hash(user.password, salt, null, (error, hash) => {
            if (error) return next(error)
            user.password = hash
            next()
        })
    })
})

UserSchema.methods.gravatar = function () {
    if (!this.email) return `https://gravatar.com/avatar?s=200&d=retro`

    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema)