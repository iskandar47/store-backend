const express = require('express')
const router = express.Router()
const {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product')

router.route('/').get(getAllProducts).post(addProduct)
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)

module.exports = router
