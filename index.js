/* EXPRESS SETUP */
const express = require('express');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Body parser middleware
const bodyParser = require('body-parser');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});

// Use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

// Set port
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => console.log('App listening on port ' + port));
