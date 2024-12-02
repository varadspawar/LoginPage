const mongoose = require('mongoose');

// Using async/await to handle asynchronous connection
module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB);
        log("Connected to the database successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to the database");
    }
};