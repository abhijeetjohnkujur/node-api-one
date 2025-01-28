require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
const path = require('path');
const authenticate = require('./middleware/authentication');
const connectDB = require('./config/db');


const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

//middleware
// Apply authentication middleware globally (to all routes)
app.use(authenticate);
app.use(helmet()); // Security headers
app.use(morgan('combined')); // HTTP request logging
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads
app.use(cors()); // Enable CORS

// Rate limiter: limit requests to 100 per hour per IP
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100, // Limit each IP to 100 requests per hour
    message: "Too many requests, please try again later.",
  });
app.use(limiter);



// Dynamically Load Routes
const loadRoutes = (folderName) => {
    const routePath = path.join(__dirname, 'routes', folderName);
    app.use(`/${folderName}`, require(routePath));
  };
  
  // Add routes dynamically
  loadRoutes('home'); // Routes for "/"
  loadRoutes('laptops'); // Routes for "/laptops"

// 404 handler for undefined routes
app.use((req, res, next) => {
  console.log("Invalid request for: ", req.path);
  res.status(404).send("wrong page");
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});


app.listen(port,(err) => err ? console.log("Error",err) : console.log(`Server is running on port ${port}`));