// Import required dependencies and modules
import express from "express"; // Import Express web framework
import dotenv from "dotenv"; // Import dotenv for environment variable management
dotenv.config(); // Load environment variables from .env file
import connectDB from "./config/db.js"; // Import database connection function
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"; // Import error middleware functions
import productRoutes from "./routes/productRoutes.js"; // Import product routes

const port = process.env.PORT || 5000; // Set the server port

connectDB(); // Connect to the database

const app = express(); // Create an Express application

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Define routes for product-related operations
app.use("/api/products", productRoutes);

// Register the notFound and errorHandler middleware functions
app.use(notFound);
app.use(errorHandler);

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server is running on port ${port}`));

// This code sets up an Express server for the application. It performs the following tasks:

// Imports necessary dependencies and modules, including express for the web framework, dotenv for environment variable management, and various middleware and route modules.
// Calls dotenv.config() to load environment variables from the .env file.
// Calls the connectDB() function to establish a connection to the database.
// Creates an Express application by calling express().
// Defines a route for the root URL ("/") that sends a "API is running..." message as the response.
// Sets up routes for product-related operations by using the productRoutes module for paths starting with "/api/products".
// Registers the notFound and errorHandler middleware functions to handle errors and requests for routes that are not found.
// Starts the server by calling app.listen() and listens on the specified port. It also logs a message indicating that the server is running.
// This code sets up the basic structure of an Express server, defines a root route, and includes routes for product-related operations. It also handles errors using the provided middleware functions.