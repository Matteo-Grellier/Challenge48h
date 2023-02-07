//Importing modules
const express = require('express')
const app = express()
const port = 3000
const User = require('../models/User'); // A CHANGER
const Token = require('../models/Token'); // A CHANGER

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

app.post('/client/login', async (req, res) => {
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

app.post('/client/register', async (req, res) => {
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


app.post('/marchant/login', async (req, res) => {
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

app.post('/marchant/register', async (req, res) => {
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

app.post('/product/add', (req, res) => { //A FAIRe

})

app.get('/product', (req, res) => {

})

app.delete('/product/:id', (req, res) => {
    
})

app.post('/product/order', (req, res) => {

})


app.get('/order/', (req, res) => {

})

app.get('/order/:id', (req, res) => {

})

app.get('/caregorie/:id', (req, res) => {

})

app.get('/merchant/:id', (req, res) => {

})

app.get('/profile/:id', (req, res) => {

})

app.post('/client/login', async (req, res) => {
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

app.post('/client/register', async (req, res) => {
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


app.post('/marchant/login', async (req, res) => {
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

app.post('/marchant/register', async (req, res) => {
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

app.post('/product/add', (req, res) => { //A FAIRe

})

app.get('/product', (req, res) => {

})

app.delete('/product/:id', (req, res) => {
    
})

app.post('/product/order', (req, res) => {

})


app.get('/order/', (req, res) => {

})

app.get('/order/:id', (req, res) => {

})

app.get('/caregorie/:id', (req, res) => {

})

app.get('/merchant/:id', (req, res) => {

})

app.get('/profile/:id', (req, res) => {

})