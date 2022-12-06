const express = require('express');
const app = express();
const cors = require('cors');
const ErrorHandler = require('./handlers/ErrorHandler')

// Settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors({exposedHeaders:'X-Total-Count'}));
app.use(express.json());

// routes
app.use('/api/personas', require('./routes/personas'))

app.use(ErrorHandler.handle)

module.exports = app