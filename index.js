const path = require('path')
const express = require("express");
const response = require('./respose.json')

const app = express();


app.get('/api/get-quantities', (req, res) =>
  res.send(response)
);

app.listen(4321, () => console.log('Server listening on port 4321'));

