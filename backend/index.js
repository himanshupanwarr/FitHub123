const express = require('express')
const mongoosed=require('./db');
mongoosed();
const app = express()
const cors=require('cors');
app.use(cors());
const port = 5000
const jwt=require('jsonwebtoken');
const JWT_SECRET='12345677';
app.use(express.json());
// app.use('./auth',require('./routes/auth'));
app.use('/',require('./routes/auth'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})