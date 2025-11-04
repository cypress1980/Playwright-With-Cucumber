const crypto = require('crypto');

function randomNumber(min = 0, max = 1000000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomEmail(domain = 'example.com') {
  const id = crypto.randomBytes(4).toString('hex');
  return `user_${id}@${domain}`;
}

function randomDate(start = '1970-01-01', end = null) {
  const startMs = new Date(start).getTime();
  const endMs = end ? new Date(end).getTime() : Date.now();
  const ts = Math.floor(Math.random() * (endMs - startMs + 1)) + startMs;
  return new Date(ts).toISOString().split('T')[0];
}

module.exports = { randomNumber, randomEmail, randomDate };
