// STEP 7 — Adding a form so visitors can post messages
// Run it with:  node --watch app.js

const express = require('express');
const { engine } = require('express-handlebars');
const messageController = require('./controllers/messageController');

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Lets Express read the data sent by our form (req.body)
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get('/', messageController.showMessages);
app.post('/messages', messageController.createMessage);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
