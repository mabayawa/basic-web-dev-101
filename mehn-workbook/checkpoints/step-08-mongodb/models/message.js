// MODEL — in charge of the DATA.
// Now the data lives in MongoDB, so it is saved even if the server restarts.
// This is the ONLY file that changed from Step 7!

const mongoose = require('mongoose');

// Connect to the MongoDB database running on your computer
mongoose.connect('mongodb://127.0.0.1:27017/messagewall')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Could not connect to MongoDB:', err.message));

// Describe what a message looks like
const Message = mongoose.model('Message', new mongoose.Schema({
  name: String,
  text: String
}));

async function getAll() {
  return Message.find().lean(); // .lean() gives Handlebars plain data
}

async function add(name, text) {
  await Message.create({ name: name, text: text });
}

module.exports = { getAll, add };
