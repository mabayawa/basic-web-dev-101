// MODEL — in charge of the DATA.
// Right now the data is just a list in memory.

const messages = [
  { name: 'Ada', text: 'Hello, world!' },
  { name: 'Alan', text: 'Web development is fun.' },
  { name: 'Grace', text: 'I just built a website!' }
];

async function getAll() {
  return messages;
}

module.exports = { getAll };
