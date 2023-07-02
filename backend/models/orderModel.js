import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        //product is a ref to the product in the products collection or the product model
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

// This code defines a mongoose schema for an order and exports the corresponding mongoose model.

// The order schema defines the structure of an order document in the MongoDB database. It has the following fields:

// user: An ObjectId reference to the user who placed the order. It is required and refers to the "User" model.
// orderItems: An array of order items, each containing the name, quantity, image, price, and product details. The product field is an ObjectId reference to a product in the "products" collection or product model.
// shippingAddress: An object containing the address, city, postal code, and country of the shipping address. All fields are required.
// paymentMethod: A string indicating the payment method used for the order. It is required.
// paymentResult: An object that stores the payment result details, including an ID, status, update time, and email address.
// itemPrice, taxPrice, shippingPrice, and totalPrice: Numeric fields representing the item price, tax price, shipping price, and total price of the order. They are all required and have default values.
// isPaid: A boolean field indicating whether the order has been paid or not. It is required and has a default value of false.
// paidAt: A date field indicating the date and time when the order was paid.
// isDelivered: A boolean field indicating whether the order has been delivered or not. It is required.
// deliveredAt: A date field indicating the date and time when the order was delivered.
// The schema also includes additional options:

// timestamps: true adds two additional fields to the schema: createdAt and updatedAt, which automatically record the creation and last update timestamps for each order.
// The schema is used to create the mongoose model named "Order" using mongoose.model("Order", orderSchema), and it is exported as the default export of the module. This allows other parts of the application to import and use the "Order" model to perform CRUD operations on the orders collection in the MongoDB database.