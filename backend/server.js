const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
app.use(cors());
const PORT = 5000;

require('./config/db');

const index = require('./routes/index');

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
app.use('/', index);

app.use(logger('dev'));

module.exports = app;