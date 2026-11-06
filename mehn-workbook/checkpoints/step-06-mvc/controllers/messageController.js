// CONTROLLER — the middle-man.
// It asks the Model for data, then hands it to the View.

const Message = require('../models/message');

async function showMessages(req, res) {
  const messages = await Message.getAll();        // 1. ask the Model
  res.render('messages', { messages: messages }); // 2. give it to the View
}

module.exports = { showMessages };
