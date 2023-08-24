const { imageDownloader } = require('./imageDownloader.ts')


const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

let urlString = 'https://images.pexels.com/photos/9571276/pexels-photo-9571276.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'

imageDownloader('arsenal', urlString)



app.get('/', (req, res) => {
    res.send('Welcome to my app')
})


let port = 9000

app.listen(port, () => {
    console.log('Listening on port=====> ', port)
})
