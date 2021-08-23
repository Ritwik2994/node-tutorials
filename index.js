const express = require('express')

const fruitsRoute = require('./routes/fruits.route')

const PORT = 5000

const app = express()


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use(express.json())

app.get('/', (req, res) => {
	res.send(`Hello world`)
})


app.use('/fruits', fruitsRoute)

app.listen(PORT, () => console.log(`server is started on port ${PORT} `))