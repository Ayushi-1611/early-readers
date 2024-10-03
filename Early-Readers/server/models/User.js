// const mongoose = require("mongoose");
// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true, minlength: 6 },
// });

// const User = mongoose.model("User", UserSchema);
// module.exports = User;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  name: { type: String }, // Optional, for profile purposes
});

module.exports = mongoose.model("User", UserSchema);
