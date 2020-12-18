const express = require('express');
const path = require('path');
const app = express(),
    bodyParser = require("body-parser"),
    port = 3030;

app.use(bodyParser.json());

app.get('/api/todos', (req, res) => {
    console.log('api/todos called!');
    res.json(tasks);
});

app.get('/', (req,res) => {
    res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port:${port}`);
});
