const express = require('express');
const axios = require('axios');
const app = express()
const port = 3000

const ASCII_ENDPOINT = "https://api.github.com/octocat";

const getData = async function() {
  const response = await axios.get(`${ASCII_ENDPOINT}`);
  return response.status;
};

app.get('/', async (req, res) => {
  const output = `<pre>${await getData()}</pre>`
  res.send(output);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
