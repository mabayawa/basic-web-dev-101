// STEP 5 — Showing a list with {{#each}}
// Run it with:  node --watch app.js

const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Our data: a list of messages
const messages = [
  { name: 'Ada', text: 'Hello, world!' },
  { name: 'Alan', text: 'Web development is fun.' },
  { name: 'Grace', text: 'I just built a website!' }
  // TRY THIS: add a message of your own
];

app.get('/', (req, res) => {
  res.render('messages', { messages: messages });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
