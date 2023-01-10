const http = require('http');
const mongoose = require('mongoose');

const app = require('./app.js');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  'mongodb+srv://nasa-api:AFDXXsgZ5b8ybbG0@nasacluster.umbf8hu.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDB ta listo!');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB tiene un error! =>', err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}..`);
  });
}

startServer();
