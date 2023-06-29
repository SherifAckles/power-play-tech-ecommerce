//1-hash password with bcryptjs for Security,Protection against rainbow table attacks,
//and Adaptability to increasing computational power
import bcrypt from "bcryptjs";

//2-creating dummy users connected to products
const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    //num is higher=more security=longer period the hash will take
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    //num is higher=more security=longer period the hash will take
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    //num is higher=more security=longer period the hash will take
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
