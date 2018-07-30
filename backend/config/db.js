const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DB_URL = 'mongodb://localhost:27017/articles';

mongoose.connect(DB_URL, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Mongoose connected to ${DB_URL}`));

module.exports = mongoose;