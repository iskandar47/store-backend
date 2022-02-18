const express = require('express')
const connectDB = require('./db/connect')
const products = require('./router/products')
const notFound = require('./middleware/not-found')
require('dotenv').config()

const app = express()
app.use(express.json())

// Routes
app.use('/api/v1/products', products)
app.use(notFound)
const PORT = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, console.log(`Server up and running on port$ ${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
