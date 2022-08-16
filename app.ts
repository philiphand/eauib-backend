import express from 'express';

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});