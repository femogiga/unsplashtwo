const express = require('express')
const useController = require('../controllers/postController.ts')

const router = express.Router()



router.get('/', useController.findByLabel)
router.get('/', useController.getAll)

router.post('/', useController.create)
router.delete('/:id', useController.remove)






module.exports = router
