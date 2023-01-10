const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://nasa-api:AFDXXsgZ5b8ybbG0@nasacluster.umbf8hu.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
  console.log('MongoDB ta listo!');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB tiene un error! =>', err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
