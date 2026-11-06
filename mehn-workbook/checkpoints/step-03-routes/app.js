// STEP 3 — Routes: different addresses show different pages
// Run it with:  node --watch app.js

const express = require('express');
const app = express();

// http://localhost:3000/
app.get('/', (req, res) => {
  res.send('<h1>Home</h1><p>Welcome to my site!</p>');
});

// http://localhost:3000/about
app.get('/about', (req, res) => {
  res.send('<h1>About</h1><p>This site was made with Express.</p>');
});

// http://localhost:3000/hello/Ada   (try your own name in the address!)
app.get('/hello/:name', (req, res) => {
  const name = req.params.name; // the part of the address after /hello/
  res.send('<h1>Hello, ' + name + '!</h1>');
});

// TRY THIS: add a route for /contact

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
