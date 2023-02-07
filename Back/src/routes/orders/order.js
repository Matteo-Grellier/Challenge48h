import { Router } from 'express';
const router = Router();
import connection from "../../database/database.js"

router.get('/', async (req, res, next) => {
  const response = await connection.query(`SELECT * FROM "orders"`)
  res.json(response.rows);
});

// get command by id
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const response = await connection.query(`SELECT * FROM "orders" WHERE id = $1`, [id])
  res.json(response.rows);
});

router.get('/orders', async (req, res, next) => {
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
})

export default router;