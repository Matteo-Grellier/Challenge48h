//Importing modules
const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: "marketplace"       
})

// open the MySQL connection
connection.connect(error => {
    if (error){
        console.log("A error has been occurred "
            + "while connecting to database.")   
        throw error
    }
})

app.get('/', (req, res) => {
    try {
        var sql = connection.query("SELECT * FROM products", (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result)
        })
    }
    catch (error) {
        console.log("A error has been occurred ")
        throw error
    }
})

app.listen(port, ()=>{
    console.log("Database connection is Ready and "
         + "Server is Listening on Port ", port)
})