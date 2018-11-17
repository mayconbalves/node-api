const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()

mongoose.connect('mongodb://localhost:27017/nodeapi', {
	useNweUrlParser: true
})

requireDir('./src/models')

const Product = mongoose.model('Product')

app.get('/', (req, res) => {
	Product.create({ 
		title: 'react native',
		description: 'Build Apps with react',
		url: 'http://github.com/facebook/react-native'
	})

	return res.send('Hello man')
})

app.listen(3001)
