const mongoose = require("mongoose");
const { Schema } = mongoose;
const CriteriaScehma = require("./Criteria");

const eventCriteriaSchema = new Schema({
  value: Number,
  criterias: CriteriaScehma,
  _event: { type: Schema.Types.ObjectId, ref: "Event" },
});

mongoose.model("eventCriteria", eventCriteriaSchema);
