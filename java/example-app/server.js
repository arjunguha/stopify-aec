"use strict";

const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, '/target')));
app.listen(8080);
console.log("listening");