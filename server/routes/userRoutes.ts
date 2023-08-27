const express = require('express')
const userController = require('../controllers/userController.ts')

const router = express.Router()





router.post('/', userController.create)


module.exports = router
