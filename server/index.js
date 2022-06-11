const express = require('express')

const app = express()


const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mca2';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');
  const findResult = await collection.find({
    f_name: 'xyz2'
  }).toArray();
  console.log('findResult ', findResult)
  // the following code examples can be pasted here...
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.get('/', function (req, res) {
  res.send('Hello World1')
})

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

app.get('/api/display/:name', function (req, res) {
    res.send('Hello World 2')
})

app.listen(3000)