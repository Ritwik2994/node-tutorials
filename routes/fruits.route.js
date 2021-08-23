const express = require('express');

const { getAllFruits, getFruitsByID, addNewFruit } = require('../controllers/fruits.controller')


const fruitsRoute = express.Router()

fruitsRoute.get('/', getAllFruits)
fruitsRoute.get('/:id', getFruitsByID)
fruitsRoute.post('/', addNewFruit)

module.exports = fruitsRoute