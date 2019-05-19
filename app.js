const express = require('express');
const app = express();

const cypherRoutes = require('./API/cypher');
const decypherRoutes = require('./API/decypher');
const vigenereRoutes = require('./API/vigenere');
const devigenereRoutes = require('./API/devigenere');

app.use('/cypher', cypherRoutes);
app.use('/decypher', decypherRoutes);
app.use('/vigenere', vigenereRoutes);
app.use('/devigenere', devigenereRoutes);

module.exports = app;