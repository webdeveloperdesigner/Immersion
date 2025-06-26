const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: String,
  model: String,
  type: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
