const mongoose = require("mongoose");
const { Schema } = mongoose;
const EventCriteria = require("./EventCriteria");

const eventSchema = new Schema({
  date: Date,
  label: String,
  description: String,
  eventCriterias: [EventCriteria],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  netValue: Number
});

mongoose.model("event", eventSchema);
