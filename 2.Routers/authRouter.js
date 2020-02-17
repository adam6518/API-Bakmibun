var express = require('express')
var router = express.Router()
const { authController } = require('../1.Controllers')

router.get('/login', authController.login)
router.post('/register', authController.register)

module.exports = router