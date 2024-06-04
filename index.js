const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'api')));
// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'api'));



 
const user = { 
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};
         
// Routes
app.get('/login', (req, res) => { 
   res.render('index1');
});     

 app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
   res.render('seccess', { username });
  } else {
   res.render('index1', { error: 'Invalid username or password' });
 }
});
 
const PORT = process.env.PORT || 4550;
app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`);
});
  