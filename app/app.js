//Importing modules
const express = require('express')
const app = express()
const port = 3000

const { getclients, getmerchants, getorders, getproducts } = require('./request.js')

// simple route
app.get('/clients', (req, res) => {
    getclients(req,res)
})
app.get('/merchants', (req, res) => {
    getmerchants(req,res)
})

app.get('/orders', (req, res) => {
    getorders(req,res)
})

app.get('/products', (req, res) => {
    getproducts(req,res)
})

app.listen(port, ()=>{
    console.log("Database connection is Ready and "
         + "Server is Listening on Port ", port)
})