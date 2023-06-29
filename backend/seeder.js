//creating the script to seed the data
import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

//initialize dotenv
dotenv.config();

//to connect with the database
connectDB();

//creating 2 functions to import data and destroy data

const importData = async () => {
  try {
    //first delete everything before importing any products or users to insure data consistency, avoiding duplication,
    //Start with a clean slate ensures that the imported data is the only data present in the system after the import process
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //creating the dummy users data
    const createdUsers = await User.insertMany(users);

    //the only user who will create a product is the admin user,
    //get the admin user by the index from users.js which is now the first one [0]
    const adminUser = createdUsers[0]._id;

    //inserting the products in a const and for each product return all the product data,
    //and the admin user value
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    //inserting the sampleProducts to the database
    await Product.insertMany(sampleProducts);
    console.log("DATA IMPORTED SUCCESSFULLY");
    process.exit();
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1); //exiting the process with error
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("DATA DESTROYED SUCCESSFULLY");
    process.exit();
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1); //exiting the process with error
  }
};

//if the argument value of the process is -d which is index 2 then destroy the data
//else import the data, will do it -i for importing
console.log(process.argv);
// if (process.argv[2]=== '-d') {
//     destroyData()
// }if (process.argv[2] === "-i") {
//   importData();
// }