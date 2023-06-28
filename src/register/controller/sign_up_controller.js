const SignUp = require('../model/signup_model');
const bcrypt = require('bcrypt');

async function createUser(req, res) {
    const { fname, lname, email, password } = req.body;
    try {
        // Check if user with the same email already exists
        const existingUser = await SignUp.findOne({ email: email });
        if (existingUser) {
            return res.status(409).send('Email already exists');
        }
        // Hash the password before saving the user to the database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new SignUp({

            fname: fname,
            lname: lname,
            email: email,
            password: hashedPassword
        });
        const newUser = await user.save();
        console.log(newUser);
        res.status(201).send(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        // Find the user with the provided email
        const user = await SignUp.findOne({ email: email });
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }
        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid email or password');
        }
        const loginData = { id: user._id, fname: user.fname, lname: user.lname, email: user.email }
        res.status(200).send(loginData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
}

module.exports = { createUser, login };