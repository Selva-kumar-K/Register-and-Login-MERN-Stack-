const express = require('express')

const register = require('./register')

const login = require('./login')

const router = express.Router()


router.get('/', (req,res) =>{
    res.json('HomePage')
})

router.post('/register', register)

router.post('/login', login)






module.exports = router
