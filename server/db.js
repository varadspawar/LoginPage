const mongoose = require('mongoose');

// Using async/await to handle asynchronous connection
module.exports = async () => {
    try {
        // Ensure the connection URL is valid
        const dbUri = process.env.DB;

        if (!dbUri) {
            throw new Error("DB connection string not defined in environment variables.");
        }

        // Connect to the MongoDB database using async/await
        await mongoose.connect(dbUri);

        console.log("MongoDB Connected");

    } catch (error) {
        console.error("Could not connect to the database:", error);
    }
};
