const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(error => {
        console.error("MongoDB connection error:", error);
    });

module.exports = mongoose;