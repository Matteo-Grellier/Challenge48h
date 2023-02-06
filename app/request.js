const express = require('express')
const app = express()
const mysql = require('mysql')

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'marketplace'     
})

// open the MySQL connection
connection.connect(error => {
    if (error){
        console.log("A error has been occurred "
            + "while connecting to database.")   
        throw error
    }
})


func = function(req, res){
    try {
        var sql = connection.query("SELECT * FROM products", (err, result) => {
            if (err) throw err
            console.log(result)
            res.send(result)
        })
    }
    catch (error) {
        console.log("A error has been occurred ")
        throw error
    }
}

module.exports = { func }