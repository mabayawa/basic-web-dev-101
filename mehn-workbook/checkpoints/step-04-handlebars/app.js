// STEP 4 — Handlebars: HTML pages with blanks we can fill in
// Run it with:  node --watch app.js

const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

// Tell Express to use Handlebars for our pages (our "Views")
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  // Show views/home.handlebars and fill in the blanks
  res.render('home', {
    title: 'My First Page',
    name: 'Ada' // <-- TRY THIS: change the name
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
