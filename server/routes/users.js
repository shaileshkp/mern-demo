const express = require('express')
const { login } = require('../controllers/users/login')
const { signup } = require('../controllers/users/signup')
const router = express.Router()

router.post('/signup', signup)

router.post('/login', login)


module.exports = router