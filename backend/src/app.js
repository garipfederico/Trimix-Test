const express = require('express');
const app = express();
const cors = require('cors');

// Settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/personas', require('./routes/personas'))

module.exports = app