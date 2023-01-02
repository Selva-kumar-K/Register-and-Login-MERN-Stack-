const express = require('express')

const dotenv = require('dotenv').config()

const cors = require('cors')

const connectDB = require('./db/db')

const router = require('./routes/routes')

const PORT = process.env.PORT

const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

const start = async() => {
    try {

        await connectDB()
        console.log('MONGODB Connected!')
        app.listen(PORT, () => console.log(`Server is listening on the port no : ${PORT}`))
        
    } catch (error) {
        console.log(error);
        
    }
}

start()
