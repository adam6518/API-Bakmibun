var express = require('express')
var router = express.Router()
const { adminController } = require('../1.Controllers')

router.get('/getusers', adminController.getUsers)
router.delete('/deleteusers', adminController.deleteUsers)
router.get('/searchusers', adminController.searchUsers)

module.exports = router