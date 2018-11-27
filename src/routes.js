const express = require('express')
const routes = express.Router()

const Product = require('./controllers/ProductController')
routes.get('/products', Product.index)
routes.post('/products', Product.store)

module.exports = routes