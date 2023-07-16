const Product = require("../Models/Products");
// Get all products

const productAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
};


// Get single product
const productSingle = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
};

// Add new products

const productAdd = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    details: req.body.details
  });
  try {
    const savedProduct = await product.save();
    res.send(savedProduct);

  } catch (err) {
    res.json({ message: err });
  }
};
// Update
const productUpdate = async (req, res) => {
  try {
    const product = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      details: req.body.details
    };
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: req.params.productId },
      product
    );
    res.json(updateProduct);
  } catch (err) {
    res.json({ message: err });
  }
};
// Delete Products

const productDel = async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.productId);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  productAll,
  productAdd,
  productSingle,
  productUpdate,
  productDel
};