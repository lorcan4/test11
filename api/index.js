const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('Hello, Vercel!');
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
