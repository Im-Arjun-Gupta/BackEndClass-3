const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, (req, res) => {
    console.log("server is started at port number 3000");
})

const dbConnect = require("./config/database")
dbConnect();

app.get("/", (req, res) => {
    res.send("App created successfully");
})