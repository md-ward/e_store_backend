const { Router } = require("express");
const { createUser, login } = require("../controller/sign_up_controller");

const router = Router();

router.post('/signUp', createUser);

router.post('/login',login)

module.exports = router;