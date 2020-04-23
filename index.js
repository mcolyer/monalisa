const express = require('express');
const axios = require('axios');
const app = express()
const port = 3000

const ASCII_ENDPOINT = "https://api.github.com/octocat/404";

const getData = async function() {
  try {
    const response = await axios.get(`${MONA_ENDPOINT}`);
    return response.data;
  } catch (e) {
    const response = await axios.get(`http://artii.herokuapp.com/make?text=Not+found`);
    return response.data;
  }
};

app.get('/', async (req, res) => {
  const output = `<pre>${await getData()}</pre>`
  res.send(output);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
