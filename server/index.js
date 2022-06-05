const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World1')
})

app.get('/api/v1/student', (req, res) => {
  res.status(200).json({
    "name": "abc",
    "class": "xyz"
  })
})
app.post('/api/v1/student', (req, res) => {
  res.send('POST /api/v1/student')
})
app.put('/api/v1/student', (req, res) => {
  res.send('PUT /api/v1/student')
})
app.delete('/api/v1/student', (req, res) => {
  res.send('DELETE /api/v1/student')
})

app.get('/api/display/:name', function (req, res) {
    res.send('Hello World 2')
})

app.listen(3000)