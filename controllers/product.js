const getAllProducts = (req, res) => {
  res.send('get all products')
}

const getProduct = (req, res) => {
  res.json({ id: req.params.id })
}

const addProduct = (req, res) => {
  res.send('add new product')
}

const updateProduct = (req, res) => {
  res.json('edit product')
}

const deleteProduct = (req, res) => {
  res.send('delete product')
}

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
}
