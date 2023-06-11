const mongoose = require("mongoose");

// product
const productSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Product", productSchema);
module.exports = Products;
