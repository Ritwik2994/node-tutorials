import express from 'express'

const PORT = 5000

const app = express()

const fruits = [
	{
		id: 0,
		name: 'mango'
	},
	{
		id: 1,
		name: 'apple'
	}
] 

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use(express.json())

app.get('/', (req, res) => {
	res.send(`Hello world`)
})

app.get('/fruits', (req, res) => {
	res.status(200).json(fruits)
})

app.get('/fruits/:id', (req, res) => {
	let ID = Number(req.params.id)
	let fruit = fruits[ID]
	if (fruit) {
		res.status(200).json(fruit)
	} else {
		res.status(404).json({
			error: 'fruit not found'
		})
	}
})


app.post('/fruits', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'please enter a fruit name'
        })
    }

    const newFruit = {
        id: fruits.length,
        name: req.body.name
    }
    fruits.push(newFruit)
    res.json(newFruit)
})

app.listen(PORT, () => console.log(`server is started on port ${PORT} `))