// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());

// Get all comments
app.get('/posts/:id/comments', async (req, res) => {
  const { data } = await axios.get(`http://localhost:4001/posts/${req.params.id}/comments`);
  res.send(data);
});

// Create a comment
app.post('/posts/:id/comments', async (req, res) => {
  const { data } = await axios.post(`http://localhost:4001/posts/${req.params.id}/comments`, req.body);
  res.send(data);
});

app.listen(4003, () => {
  console.log('Listening on 4003');
});