const { imageDownloader } = require('./imageDownloader.ts')
const { downloadImage } = require('./imageDownloader.ts')
const path = require('path')



const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
//rtying

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, "/photos")))

let urlString = 'https://images.pexels.com/photos/9571276/pexels-photo-9571276.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'

// imageDownloader('arsenal', urlString)
downloadImage(urlString, 'arsenal')


const urlString2 = "https://images.pexels.com/photos/11857612/pexels-photo-11857612.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
downloadImage(urlString2, 'Chelsea')

app.get('/', (req, res) => {
    res.send('Welcome to my app')
})


let port = 9000

app.listen(port, () => {
    console.log('Listening on port=====> ', port)
})


module.exports = app
