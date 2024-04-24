const mongoose = require("mongoose");

const dbConnect =  () => {
    mongoose.connect("mongodb://localhost:27017/blogapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("database connection successfully")
    })
    .catch((err) => {
        console.log("error in making connection to database", err)
        process.exit(1);
    });
}

module.exports = dbConnect;