const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname)); // Set the directory for EJS files

// Serve static files (CSS, JS, images) if you have any
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the EJS page
app.get('/api1', (req, res) => {
  res.render('index1'); // Render the index1.ejs file
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
