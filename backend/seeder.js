// Import required dependencies and modules
import mongoose from "mongoose"; // Import mongoose for database connection
import dotenv from "dotenv"; // Import dotenv for environment variable management
import users from "./data/users.js"; // Import user data
import products from "./data/products.js"; // Import product data
import User from "./models/userModel.js"; // Import User model
import Product from "./models/productModel.js"; // Import Product model
import Order from "./models/orderModel.js"; // Import Order model
import connectDB from "./config/db.js"; // Import database connection function
import colors from "colors"; // Import colors for console logging

// Initialize dotenv
dotenv.config(); // Load environment variables from .env file

// Connect to the database
connectDB(); // Connect to the MongoDB database

// Function to import data
const importData = async () => {
  try {
    // Delete existing data
    await Order.deleteMany(); // Delete all orders
    await Product.deleteMany(); // Delete all products
    await User.deleteMany(); // Delete all users

    // Create dummy users
    const createdUsers = await User.insertMany(users); // Insert the user data into the database and get the created user objects
    const adminUser = createdUsers[0]._id; // Get the ID of the first created user (assuming it's the admin user)

    // Insert sample products
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser, // Assign the admin user as the owner of the sample products
    }));
    await Product.insertMany(sampleProducts); // Insert the sample products into the database

    console.log("Data imported successfully".green.inverse); // Log success message in green color
    process.exit(); // Exit the process
  } catch (error) {
    console.error(error); // Log the error
    process.exit(1); // Exit the process with error status code
  }
};

// Function to destroy data
const destroyData = async () => {
  try {
    await Order.deleteMany(); // Delete all orders
    await Product.deleteMany(); // Delete all products
    await User.deleteMany(); // Delete all users

    console.log("Data destroyed successfully".red.inverse); // Log success message in red color
    process.exit(); // Exit the process
  } catch (error) {
    console.error(error); // Log the error
    process.exit(1); // Exit the process with error status code
  }
};

// Get the command-line argument
const command = process.argv[2];

// Execute the corresponding function based on the command
if (command === "-d") {
  console.log("Destroying data..."); // Log the destruction process
  destroyData(); // Call the destroyData function
} else {
  console.log("Importing data..."); // Log the import process
  importData(); // Call the importData function
}
// This code is responsible for importing and destroying data in the application's database. It performs the following tasks:

// Imports necessary dependencies and modules, including mongoose for database connection, dotenv for environment variable management, and various models and data files.
// Calls the connectDB() function to establish a connection to the MongoDB database.
// Defines two functions: importData() and destroyData(), which handle the import and destruction of data, respectively.
// The importData() function:
// Deletes existing data by calling the deleteMany() method on the Order, Product, and User models.
// Inserts dummy users into the database using the insertMany() method on the User model. The inserted user objects are obtained and stored in createdUsers.
// Retrieves the ID of the first created user (assuming it's the admin user) and assigns it to adminUser.
// Maps over the products array, assigning the adminUser as the owner of each product, and creates an array of modified product objects called sampleProducts.
// Inserts the sampleProducts into the database using the insertMany() method on the Product model.
// Logs a success message to the console and exits the process.
// The destroyData() function:
// Deletes all orders, products, and users in the database by calling the deleteMany() method on the corresponding models.
// Logs a success message to the console and exits the process.
// Retrieves the command-line argument provided when running the script.
// If the command is -d, it logs a message indicating the destruction process and calls the destroyData() function.
// If the command is not -d, it logs a message indicating the import process and calls the importData() function.
// This script allows for easy import and destruction of data in the database by running the script with the appropriate command-line argument