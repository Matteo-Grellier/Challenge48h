//Importing modules
const express = require('express')
const app = express()
const port = 3000

const { func } = require('./request.js')

// simple route
app.get('/', (req, res) => {
    func(req,res)
})

app.listen(port, ()=>{
    console.log("Database connection is Ready and "
         + "Server is Listening on Port ", port)
})