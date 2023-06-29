//creating the script to seed the data
import mongoose from "mongoose";
import dotenv from 'dotenv'   
import users from './data/users.js'
import products from './data/products.js';
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";


//initialize dotenv
dotenv.config()

//to connect with the database
connectDB()

//creating 2 functions to import data and destroy data

const importDate = () => {
    
}


const destroyDate = () => {};