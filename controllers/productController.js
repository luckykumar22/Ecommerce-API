const mongoose = require("mongoose");
const Product = require("../models/products");
const Counter = require("../models/counter");

//home page displaying all the posts
module.exports.index = async function (req, res) {
  try {
    let product = await Product.find({});
    // sending response
    return res.json(200, {
      data: {
        message: "list of products",
        products: product,
      },
    });
  } catch (err) {
    console.log(`error${err}`);
    return (
      res,
      json(500, {
        message: "error in fetching post ",
      })
    );
  }
};

//function to increase seq by 1 whenever called which is further used as _id of roduct
async function getNextSequence(name) {
  var ret = await Counter.findOneAndUpdate(
    { _id: name },
    { $inc: { seq: 1 } },
    { new: true }
  );
  console.log(ret);

  return ret.seq;
}

// to create a product
module.exports.create = async function (req, res) {
  try {
    let ifExist = await Product.findOne({ name: req.body.name });

    if (ifExist != null) {
      return await res.json(404, {
        message: "Product already exist",
      });
    }

    let length = await Counter.find({}).length;
    if (length == 0) {
      await Counter.create({
        _id: "userid",
        seq: 0,
      });
    }

    id = await getNextSequence("userid");

    //creating product
    await Product.create({
      _id: id,
      name: req.body.name,
      quantity: req.body.quantity,
    });
    let product = await Product.findById(id).select("-_id");

    if (product) {
      return res.json(201, {
        data: {
          product: product,
        },
      });
    }
  } catch (error) {
    console.log(`error${error}`);
    return res.json(500, {
      message: "Internal Error",
    });
  }
};

// TO DELETE THE PRODUCT
module.exports.delete = async function (req, res) {
  try {
    let id = req.params.id;

    //finding product  by id
    let product = await Product.findById(id);
    //if product not fount then responding 401 not found
    if (product == null) {
      return res.json(401, {
        message: "post id not found",
      });
    }

    //removing product
    product.remove();

    return res.json(401, {
      message: "post deleted succesfully",
    });
  } catch (error) {
    console.log(`error ${error}`);
    return res.json(500, {
      message: "Internal error in deleting post",
    });
  }
};

// TO UPDATE THE QUANTITY OF PRODUCT
module.exports.update = async function (req, res) {
  try {
    //if quantity is -ve then returning
    if (req.query.number < 0) {
      return res.json(400, {
        message: "error quantity can't be negative",
      });
    }
    //finding and updating ther product if product not fornd it will return null

    let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { quantity: req.query.number },
      { new: true }
    );
    if (product == null) {
      return res.json(404, {
        message: "post id not found",
      });
    }
    return res.json(200, {
      data: {
        product: product,
      },
    });
  } catch (err) {
    console.log(`error ${err}`);
    return res.json(500, {
      message: "Internal error in updating  post",
    });
  }
};
