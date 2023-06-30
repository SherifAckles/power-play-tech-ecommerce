import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import colors from "colors";

// Initialize dotenv
dotenv.config();

// Connect to the database
connectDB();

// Function to import data
const importData = async () => {
  try {
    // Delete existing data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Create dummy users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    // Insert sample products
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));
    await Product.insertMany(sampleProducts);

    console.log("Data imported successfully".green.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Function to destroy data
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed successfully".red.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Get the command-line argument
const command = process.argv[2];

// Execute the corresponding function based on the command
if (command === "-d") {
  console.log("Destroying data...");
  destroyData();
} else {
  console.log("Importing data...");
  importData();
}

