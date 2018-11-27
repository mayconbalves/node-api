const express = require('express')
const routes = express.Router()

const Product = require('./controllers/ProductController')
routes.get('/products', Product.index)
routes.get('/products/:id', Product.show)
routes.post('/products', Product.store)
routes.put('/products/:id', Product.update)
routes.delete('/products/:id', Product.delete)

module.exports = routes