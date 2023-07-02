import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);

export default User;

// The user schema specifies the structure of a user document in the MongoDB database. It has the following fields:

// name: The name of the user. It is required.
// email: The email address of the user. It is required and must be unique.
// password: The password of the user. It is required and unique (ensuring each user has a unique password).
// isAdmin: A boolean field indicating whether the user is an admin or not. It is required and has a default value of false.
// The schema also includes the timestamps: true option, which automatically adds two additional fields to the schema: createdAt and updatedAt. These fields record the creation and last update timestamps for each user document.

// The User model is created using the userSchema and exported as the default export of the module. This allows other parts of the application to import and use the User model to perform CRUD operations on the users collection in the MongoDB database.