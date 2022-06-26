
app.get('/api/v1/student', (req, res) => {
    res.status(200).json({
      "name": "abcxy",
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