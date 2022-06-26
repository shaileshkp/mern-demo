const express = require('express')
const { signup } = require('../controllers/users/signup')
const router = express.Router()

router.post('/signup', signup)

router.post('/signin', (req, res) => {
    res.send('Signin called!')
})


module.exports = router