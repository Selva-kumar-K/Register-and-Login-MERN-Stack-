const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    mail : String,
    password : String
})

module.exports = mongoose.model('register', registerSchema)

