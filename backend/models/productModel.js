// The reviewSchema defines the structure of a review document in the MongoDB database. It has the following fields:

// user: An ObjectId reference to the user who wrote the review. It is required and refers to the "User" model.
// name: The name of the reviewer. It is required.
// rating: The rating given by the reviewer. It is required and represents a number.
// comment: The comment or feedback provided by the reviewer. It is required.
// The productSchema defines the structure of a product document in the MongoDB database. It has the following fields:

// user: An ObjectId reference to the user who added the product. It is required and refers to the "User" model.
// name: The name of the product. It is required.
// image: The URL or path to the product image. It is required.
// brand: The brand or manufacturer of the product. It is required.
// category: The category or type of the product. It is required.
// description: A description or details about the product. It is required.
// reviews: An array of review documents, following the reviewSchema structure.
// rating: The average rating of the product based on the reviews. It is required and has a default value of 0.
// numReviews: The number of reviews the product has received. It is required and has a default value of 0.
// price: The price of the product. It is required and has a default value of 0.
// countInStock: The quantity of the product available in stock. It is required and has a default value of 0.
// Both schemas include additional options:

// timestamps: true adds two additional fields to the schemas: createdAt and updatedAt, which automatically record the creation and last update timestamps for each document.
// The Product model is created using the productSchema and exported as the default export of the module. This allows other parts of the application to import and use the Product model to perform CRUD operations on the products collection in the MongoDB database.

import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
