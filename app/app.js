//Importing modules
import client from './src/routes/clients/client.js';
import merchant from './src/routes/merchants/merchant.js';
import order from './src/routes/orders/order.js';
import product from './src/routes/products/product.js';
import cors from 'cors';
import express, { Router } from 'express'
const app = express()
const port = process.env.PORT | 4000;

if ('development' === process.env.NODE_ENV) {
  app.use(cors({
      origin: true,
      credentials: true,
  }));
} else {
  app.use(cors());
}

app.use('/client/', client)
app.use('/merchant/', merchant)
app.use('/order/', order)
app.use('/product/', product)

app.listen(port, ()=>{
    console.log("Database connection is Ready and "
    + "Server is Listening on Port ", port)
})