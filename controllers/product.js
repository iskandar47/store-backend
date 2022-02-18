const Product = require('../models/product')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({ products })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getProduct = async (req, res) => {
  try {
    const { id: productID } = req.params
    const product = await Product.findOne({ _id: productID })
    if (!product) {
      return res
        .status(404)
        .json({ msg: `cant find product with id ${productID}` })
    }
    res.status(200).json({ product })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json({ product })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id: productID } = req.params
    const product = await Product.findByIdAndDelete({ _id: productID })
    if (!product) {
      res.status(404).json({ msg: `can't find product with id ${productID}` })
    }
    res
      .status(200)
      .json({ msg: `product with id: ${productID} successfuly deleted` })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id: productID } = req.params
    const product = await Product.findByIdAndUpdate(
      { _id: productID },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    )

    if (!product) {
      res
        .status(404)
        .json({ msg: `can't find product with the id: ${productID}` })
    }

    res.status(200).json({ product })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
}
