const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure this path is correct

// Serve static files (if any)
app.use(express.static(path.join(__dirname, 'public'))); // Adjust if you have static files

app.get('/api1', (req, res) => {
  res.render('index1'); // Ensure this EJS file exists in the views directory
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for Vercel
