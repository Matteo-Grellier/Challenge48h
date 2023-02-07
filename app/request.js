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

getclients = function(req, res){
    try {
            connection.query("SELECT * FROM clients", (err, result) => {
            if (err) throw err
            res.send(result)
            console.log("Clients have been fetched successfully.")
            
        })
    }
    catch (error) {
        console.log("A error has been occurred when trying to get clients")
        throw error
    }
}

getmerchants = function(req, res){
    try {
            connection.query("SELECT * FROM merchants", (err, result2) => {
            if (err) throw err
            res.send(result2)
            console.log("Merchants have been fetched successfully.")
        })
    }
    catch (error) {
        console.log("A error has been occurred when trying to get merchants")
        throw error
    }
}

getorders = function(req, res){
    try {
            connection.query("SELECT * FROM orders", (err, result3) => {
            if (err) throw err
            res.send(result3)
        })
    }
    catch (error) {
        console.log("A error has been occurred when trying to get orders")
        throw error
    }
}

getproducts = function(req, res){
    try {
            connection.query("SELECT * FROM products", (err, result4) => {
            if (err) throw err
            res.send(result4)
        })
    }
    catch (error) {
        console.log("A error has been occurred when trying to get products")
        throw error
    }
}

module.exports = { getclients, getmerchants, getorders, getproducts }