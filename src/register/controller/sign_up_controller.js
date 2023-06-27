const { json } = require('body-parser');
const SignUp = require('../model/signup_model');

async function createUser(req, res) {
    const { fname, lname, email, password } = req.body;

    const user = new SignUp({
        fname: fname,
        lname: lname,
        email: email,
        password: password
    });

    try {
        const newUser = await user.save();
        console.log(newUser);

        res.status(201).send(newUser);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern.email) {
            res.status(409).send('Email already exists');
            console.error(error);

        } else {
            console.error(error);
            res.status(500).send('Error registering user');
        }
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        console.log(email, password)
        const user = await SignUp.findOne({ email: email });
        console.log(user)
        if (!user) {
            console.log('err1')
            return res.status(401).send('Invalid email or password');
        }
        if (user.password !== password) {
            return res.status(401).send('Invalid email or password');
        }
        console.log(user)
        const loginData = { fname: user.fname, lname: user.lname, email: user.email }

        res.status(200).send(loginData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
}

module.exports = { createUser, login };