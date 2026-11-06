// MODEL — in charge of the DATA.
// The data is still a list in memory (it resets when the server restarts).

const messages = [
  { name: 'Ada', text: 'Hello, world!' }
];

async function getAll() {
  return messages;
}

async function add(name, text) {
  messages.push({ name: name, text: text });
}

module.exports = { getAll, add };
