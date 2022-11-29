const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! This is an update to check that nodemon is working.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
