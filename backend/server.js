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
