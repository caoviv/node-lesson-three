const express = require('express');
const app = express();
const port = 3000;
let id = 5642

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/firstServer', (req, res) => {
    res.send("Hi there! This is my first route built using express framework");
});

app.get(`/firstUser/:${id}`, (req, res) => {
    res.send(`Hi there, your user ID is ${id}`);
});

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })
