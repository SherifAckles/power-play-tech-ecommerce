
//Rather than continue adding routes into productRoutes.js we created the productControllers and use it to keep things organized

import asyncHandler from "../middleware/asyncHandler.js"; // Import async handler middleware
import Product from "../models/productModel.js"; // Import Product model



//@desc    Fetch all products
//@route   Get/api/products
//@access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // Retrieve all products from the database
  res.json(products); // Send the products as a JSON response
});

//@desc    Fetch single product
//@route   Get/api/products/:id
//@access  Public
const getProductById = asyncHandler(async (req, res) => {
 const product = await Product.findById(req.params.id); // Find a product by its ID in the database

 if (product) {
   res.json(product); // Send the product as a JSON response if found
 } else {
   res.status(404); // Set the response status code to 404 (Not Found)
   throw new Error("Resource not found"); // Throw an error to trigger the error handling middleware
 }
});
export {getProducts,getProductById}

// This code exports two functions, getProducts and getProductById, which are used to handle HTTP requests related to products.

// The code first imports the necessary dependencies:

// asyncHandler is a middleware that helps handle asynchronous operations in Express.
// Product is a model for interacting with the product data in the database.
// products is an import that seems to be unused in the provided code.
// The getProducts function is an asynchronous function that handles the request to fetch all products. It uses Product.find({}) to retrieve all products from the database and then sends the products as a JSON response using res.json(products).

// The getProductById function is also an asynchronous function that handles the request to fetch a single product by its ID. It uses Product.findById(req.params.id) to find a product in the database based on the provided ID. If the product is found, it is sent as a JSON response using res.json(product). If the product is not found, it sets the response status code to 404 (Not Found), throws an error with the message "Resource not found," and triggers the error handling middleware.

// Both functions are exported and can be used as route handlers for the corresponding routes in an Express application.