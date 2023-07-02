// Import required dependencies and modules
import express from "express"; // Import Express web framework
const router = express.Router(); // Create an Express router
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

router.route("/").get(getProducts); // Define a route to handle GET requests for fetching all products
router.route("/:id").get(getProductById); // Define a route to handle GET requests for fetching a single product by ID

export default router; // Export the router for use in other modules

// This code sets up an Express router to handle routes related to products. It imports the necessary dependencies and modules:

// express is the web framework used to build the API.
// router creates a new instance of the Express router.
// It also imports the getProducts and getProductById functions from the productController.js module.

// The code defines two routes using the router:

// The first route is for handling GET requests to fetch all products. It maps the route / to the getProducts function, so when a GET request is made to /, the getProducts function will be called.
// The second route is for handling GET requests to fetch a single product by ID. It uses a dynamic route parameter /:id to capture the product ID. When a GET request is made to /:id, the getProductById function will be called with the captured ID.