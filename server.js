const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/nodeapi', {
	useNweUrlParser: true
})

app.get('/', (req, res) => {
	res.send('Hello man')
})

app.listen(3001)
