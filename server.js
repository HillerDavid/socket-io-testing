const express = require('express');

const app = express;()
const PORT = process.ENV.PORT || 3000;

app.use(express.json())