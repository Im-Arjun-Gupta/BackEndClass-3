const express = require("express");
const app = express();

app.listen(3000, (req, res) => {
    console.log("server is started at port number 3000");
})