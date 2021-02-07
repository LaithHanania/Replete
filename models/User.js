const mongoose = require("mongoose");
const { Schema } = mongoose; 

const userSchema = new Schema({
  googleId: String,
  givenName: String,
  familyName: String,
  emails: Array
});

mongoose.model("users", userSchema);