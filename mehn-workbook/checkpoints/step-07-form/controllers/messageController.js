// CONTROLLER — the middle-man between the Model and the View.

const Message = require('../models/message');

// GET /  -> show all messages
async function showMessages(req, res) {
  const messages = await Message.getAll();
  res.render('messages', { messages: messages });
}

// POST /messages  -> save a new message, then go back to the wall
async function createMessage(req, res) {
  await Message.add(req.body.name, req.body.text);
  res.redirect('/');
}

module.exports = { showMessages, createMessage };
