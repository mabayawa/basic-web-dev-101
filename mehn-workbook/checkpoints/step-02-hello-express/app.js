// STEP 2 — Your first web server
// Run it with:  node --watch app.js
// Then open:    http://localhost:3000

const express = require('express'); // load the Express library
const app = express();               // create our web app

// When someone visits "/" (the home page), send back a message
app.get('/', (req, res) => {
  res.send('Hello World! This is my first web server.');
});

// Start listening for visitors on port 3000
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
