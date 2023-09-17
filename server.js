const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
require("./db/connect");

const app = express();
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname);
// app.use(express.static());
// const url = 'mongodb://localhost:27017';
// const dbName = 'mydatabase';

// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
    res.send("€€Server is running");
});

app.listen(port, () => {

    console.log(`Listening on server ${port}`);

});


// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     if (err) return console.error(err);
//     const db = client.db(dbName);

//     // Set up routes and server logic here

//     app.listen(port, () => {
//         console.log(`Server is running on port ${port}`);
//     });
// });

// app.post('/register', (req, res) => {
//     const userData = req.body;

//     // Insert user data into the MongoDB collection
//     db.collection('users').insertOne(userData, (err, result) => {
//         if (err) return res.status(500).send(err);
//         res.status(200).send('Registration successful.');
//     });
// });

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     // Query the MongoDB collection to check username and password
//     db.collection('users').findOne({ username }, (err, user) => {
//         if (err) return res.status(500).send(err);

//         if (!user || user.password !== password) {
//             return res.status(401).send('Invalid username or password.');
//         }

//         // Successful login, set up a session or token, and return a response
//         res.status(200).send('Login successful.');
//     });
// });

// // script.js
// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;

//     // Send an AJAX request to /login route with username and password
//     // Handle the response, e.g., show a message to the user
// });

// document.getElementById('registerForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const username = document.getElementById('registerUsername').value;
//     const password = document.getElementById('registerPassword').value;

//     // Send an AJAX request to /register route with username and password
//     // Handle the response, e.g., show a message to the user
// });
