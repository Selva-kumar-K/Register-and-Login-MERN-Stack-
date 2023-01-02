const registerSchema = require('../models/model')

const bcrypt = require('bcrypt')

const register = async(req,res) => {

    await registerSchema.find({mail : req.body.mail})
    .exec()
    .then((users) => {
        if (users.length >= 1){
            res.send('Email already taken, Please Login')
        }
        else{
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json(err)
                }
                else{
                    const register = new registerSchema({
                        mail : req.body.mail,
                        password : hash
                    })

                    register.save()
                    .then((result) => {res.status(200).json("Registered Successfully!")})
                    .catch((err) => res.status(400).json(errr))
                }
            })
        }
    })



}

module.exports = register