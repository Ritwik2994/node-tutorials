const fruitsModel = require('../models/fruits.model')

function getAllFruits(req, res) {
	res.status(200).json(fruitsModel)
}

function getFruitsByID(req, res) {
	let ID = Number(req.params.id)
	let fruit = fruitsModel[ID]
	if (fruit) {
		res.status(200).json(fruit)
	} else {
		res.status(404).json({
			error: 'fruit not found'
		})
	}
}


function addNewFruit(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'please enter a fruit name'
        })
    }

    const newFruit = {
        id: fruitsModel.length,
        name: req.body.name
    }
    fruitsModel.push(newFruit)
    res.json(newFruit)
}

module.exports = {
    getAllFruits,
    getFruitsByID,
    addNewFruit
}