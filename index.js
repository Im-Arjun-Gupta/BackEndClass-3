const express = require("express");
const app = express();

// middleware for converting the request data into json
app.use(express.json());

app.listen(3000, (req, res) => {
    console.log("server is started at port number 3000");
})

// database connection
const dbConnect = require("./config/database")
dbConnect();

// mounting
const blog = require("./routes/blog");
app.use("/api/v1", blog);

// default route to show something on the display
app.get("/", (req, res) => {
    res.send("App created successfully");
})