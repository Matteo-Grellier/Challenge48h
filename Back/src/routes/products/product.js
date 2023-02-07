import { Router } from 'express';
const router = Router();
import connection from "../../database/database.js"


router.post('/product/add', (req, res) => { //A FAIRe
})

router.get('/product', (req, res) => {
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
})

router.delete('/product/:id', (req, res) => {
    getProductID()
})

router.post('/product/order', (req, res) => {
})


export default router;