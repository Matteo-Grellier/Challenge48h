//Importing modules
const express = require('express')
const app = express()
const port = 3000

const { getclients, getmerchants } = require('./request.js')

// simple route
app.get('/', (req, res) => {
    getclients(req,res)
    getmerchants(req,res)
    // getorders(req,res)
    // getproducts(req,res)
})

app.listen(port, ()=>{
    console.log("Database connection is Ready and "
         + "Server is Listening on Port ", port)
})