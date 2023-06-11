const mongoose = require("mongoose");

// to get id of product

const counterSchema = mongoose.Schema(
  {
    _id: {
      type: String,
    },
    seq: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Counter = mongoose.model("Counter", counterSchema);
module.exports = Counter;
