const express = require('express')
const app = express()
const cors = require('cors')
const {MongoClient, ObjectId} = require('mongodb')
require('dotenv').config()
const PORT = 8000

let db, 
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log('Connected to database')
        db = client.db(dbName)
        collection = db.collection('movies')
    })

//Enabling middleware expressions
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())
//------------------------------------------------------
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})
