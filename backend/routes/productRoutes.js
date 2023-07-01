// Import required dependencies and modules
import express from "express"; // Import Express web framework
const router = express.Router(); // Create an Express router

import asyncHandler from "../middleware/asyncHandler.js"; // Import async handler middleware
import Product from "../models/productModel.js"; // Import Product model

// Route to get all products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); // Retrieve all products from the database
    res.json(products); // Send the products as a JSON response
  })
);

// Route to get a single product by ID
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id); // Find a product by its ID in the database

    if (product) {
      res.json(product); // Send the product as a JSON response if found
    } else {
      res.status(404); // Set the response status code to 404 (Not Found)
      throw new Error("Resource not found"); // Throw an error to trigger the error handling middleware
    }
  })
);

export default router; // Export the router for use in other modules
