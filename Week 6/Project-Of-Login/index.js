const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const app = express();
const PORT = 3000;
const JWT_SECRET = "randommohiz";

// Middleware
app.use(express.json());
app.use(cors()); // allow cross-origin requests

const users = [];

// Logger middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

// Authentication middleware
function auth(req, res, next) {
  const token = req.headers.token;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.username = decoded.username;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or missing token" });
  }
}

// Routes

// Signup
app.post("/signup", logger, (req, res) => {
  const { username, password } = req.body;
  console.log("Signup request received:", username, password);

  // Check if username already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  users.push({ username, password });
  res.json({ message: "You are signed up" });
});

// Signin
app.post("/signin", logger, (req, res) => {
  const { username, password } = req.body;
  console.log("Signin attempt:", username, password);

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, JWT_SECRET);
  res.json({ token });
});

// Protected route: /me
app.get("/me", logger, auth, (req, res) => {
  const user = users.find(u => u.username === req.username);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    username: user.username,
    password: user.password, // Note: not recommended in production
  });
});

// Start server
app.listen(PORT, () => {
  console.log(` http://localhost:${PORT}`);
});







// const express = require('express');
// const jwt = require('jsonwebtoken');
// const path = require('path'); // required for correct file path
// const app = express();

// const JWT_SECRET = "randommohiz"; // your secret key
// const users = []; // simple in-memory user store

// app.use(express.json());

// // Logger middleware
// function logger(req, res, next) {
//     console.log(`${req.method} request came to ${req.url}`);
//     next();
// }

// // Auth middleware
// function auth(req, res, next) {
//     const token = req.headers.token;

//     try {
//         const decodedData = jwt.verify(token, JWT_SECRET);
//         req.username = decodedData.username;
//         next();
//     } catch (err) {
//         res.status(401).json({ message: "Unauthorized access. Invalid token." });
//     }
// }

// // Serve the frontend HTML file
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "public", "index.html")); // fixed path
// });

// // Signup endpoint
// app.post("/signup", logger, function (req, res) {
//     const { username, password } = req.body;

//     users.push({ username, password }); // FIXED: should push to users, not username

//     res.json({ message: "You are signed up" });
// });

// // Signin endpoint
// app.post("/signin", logger, function (req, res) {
//     const { username, password } = req.body;

//     const foundUser = users.find(user => user.username === username && user.password === password);

//     if (!foundUser) {
//         return res.status(401).json({ message: "Credentials incorrect" });
//     }

//     const token = jwt.sign({ username }, JWT_SECRET);

//     res.json({ token });
// });

// // Protected user info route
// app.get("/me", logger, auth, function (req, res) {
//     const currentUser = users.find(user => user.username === req.username);

//     if (!currentUser) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     res.json({
//         username: currentUser.username,
//         password: currentUser.password // (Note: not safe to return plain password)
//     });
// });

// // Start the server
// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });
