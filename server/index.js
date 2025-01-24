require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

console.log('userRoutes:', userRoutes);
console.log('authRoutes:', authRoutes);

//database connection
connection() ;


//middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Allow only this origin
    credentials: true, // Allow cookies (if needed)
  }));


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}......`));