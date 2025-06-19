const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const users = []; // In-memory store

// Sign up route
app.post('/signup', (req, res) => {
  const { username } = req.body;

  const userExists = users.find(u => u.username === username);

  if (userExists) {
    return res.status(409).json({ message: 'User already signed up' });
  }

  users.push({ username });
  return res.status(201).json({ message: 'User signed up successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
