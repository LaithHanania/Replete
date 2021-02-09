const mongoose = require("mongoose");
const { Schema } = mongoose; 

const criteriaSchema = new Schema({
  label: String,
  weight: Number,
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
});

mongoose.model("criteria", criteriaSchema);