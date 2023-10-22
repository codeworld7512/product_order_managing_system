const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const salesSchema = new mongoose.Schema({
  number: {
    type: Number,
    default: 1
  },
  altnum: {
    type: Number,
    default: 1
  },
  currency: {
    type: String,
    default:'$'
  },
  product: {
    type: String,
    required:true
  },
  unpaid: {
    type: Number
  },
  paid: {
    type: Number
  },
  status: {
    type: String,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  customerName: {
    type: String,
    required:true
  },
  customerLocation: {
    type: String,
    required:true
  }
});

module.exports = mongoose.model("Sales", salesSchema);
