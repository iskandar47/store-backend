const Product = require('../models/product')
const asyncWrapper = require('../middleware/async-wrapper')
const { creatCustomError } = require('../errors/custom-error')
const getAllProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({})
  res.status(200).json({ products })
})

const getProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params
  const product = await Product.findOne({ _id: productID })
  if (!product) {
    return next(creatCustomError(`cant find product with id ${productID}`, 404))
  }
  res.status(200).json({ product })
})

const addProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body)
  res.status(200).json({ product })
})

const deleteProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params
  const product = await Product.findByIdAndDelete({ _id: productID })
  if (!product) {
    return next(
      creatCustomError(`can't find product with id ${productID}`, 404),
    )
  }
  res
    .status(200)
    .json({ msg: `product with id: ${productID} successfuly deleted` })
})

const updateProduct = asyncWrapper(async (req, res, next) => {
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
    return next(
      creatCustomError(`can't find product with the id: ${productID}`, 404),
    )
  }

  res.status(200).json({ product })
})

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
}
