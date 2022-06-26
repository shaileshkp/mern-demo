const express = require('express')
const cors = require('cors')
require('dotenv').config()
var bodyParser = require('body-parser')
const apis = require('./routes')
const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/api/v1', apis)


app.listen(process.env.PORT)