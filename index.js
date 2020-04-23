import express from 'express';
import { get } from 'axios';
const app = express()
const port = 3000

const ASCII_ENDPOINT = "https://api.github.com/octocat";

const getData = async function() {
  const response = await get(`${ASCII_ENDPOINT}`);
  return response.data;
};

app.get('/', async (req, res) => {
  const output = `<pre>${await getData()}</pre>`
  res.send(output);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
