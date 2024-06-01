const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'api')); // Set the directory for EJS files

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname,  'api')));


app.get('/api1', (req, res) => {
  res.render('index1', (err) => {
    if (err) {
      console.error('Error rendering EJS:', err);
      res.status(500).send('Server Error');
    }
  });
});
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  
