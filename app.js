const express = require('express')
const connectDB = require('./db/connect')
const products = require('./router/products')
require('dotenv').config()

const app = express()
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
  res.send('First app')
})

app.use('/api/v1/products', products)

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
