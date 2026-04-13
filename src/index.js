const express = require('express');

const app = express();

app.use(express.json()); // Parse JSON bodies

module.exports = app;