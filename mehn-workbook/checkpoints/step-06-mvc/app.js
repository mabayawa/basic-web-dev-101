// STEP 6 — Organizing our code with MVC
//   models/       -> the data          (Model)
//   views/        -> what users see    (View)
//   controllers/  -> connects the two  (Controller)
// Run it with:  node --watch app.js

const express = require('express');
const { engine } = require('express-handlebars');
const messageController = require('./controllers/messageController');

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// ROUTE: when someone visits "/", let the controller handle it
app.get('/', messageController.showMessages);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
