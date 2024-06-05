const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'api')); // Update path for serverless deployment

// Serve static files


// Define a route to render the EJS page
app.get('/api1', (req, res) => {
  res.render('index1'); // Render the index1.ejs file
});

module.exports.handler = serverless(app);
