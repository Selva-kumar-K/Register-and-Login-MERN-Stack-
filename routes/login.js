const registerSchema = require('../models/model')

const bcrypt = require('bcrypt')

const login = async(req,res) => {


    await registerSchema.find({mail : req.body.mail})
    .exec()
    .then((users) => {
        if (users.length < 1) {
            res.json("user not found")
        }
        else{
            bcrypt.compare(req.body.password, users[0].password, (err, isEqual) => {
                if (err) {
                    res.status(501).json(err)
                }
                if (isEqual){
                    res.json('Logged Successfully!')
                }
                else{
                    res.json('Password is wrong')
                }
            })
        }
    })


}


module.exports = login