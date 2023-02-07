import { Router } from 'express';
import connection from "../../database/database.js"
const router = Router();

router.post('/merchant/login', async (req, res) =>  {
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
})

router.post('/merchant/login', async (req, res) =>  {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email });
      if (!user) return res.code(401).send({ message: 'ERR_INVALID_LOGIN' });

      if (!await bcrypt.compare(password, user.password)) return res.code(401).send()

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

      return res.code(200).send({ token });
  } catch (error) {
      return res.code(401).send({ message: error.message });
  }
})

router.post('/merchant/register', async (req, res) => {
  const { firstname, lastname, email, password } = req.body; // A CHANGER
  try {
      const user = new User({
          firstname,
          lastname,
          email,
          password: await bcrypt.hash(password, 10)
      });

      await user.save();

      return res.code(201).send()
  } catch (error) {
      return res.code(400).send(error);
  }
})

router.get('/merchant/:id', (req, res) => {

})


export default router;