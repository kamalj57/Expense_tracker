const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const app = express()

require('dotenv').config()
const router=require('./routes/transactions.js')
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

app.use(router);

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()