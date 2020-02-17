var express = require('express')
var router = express.Router()
const { cartController } = require('../1.Controllers')

router.post('/posttocarts', cartController.postToCarts)
router.get('/getcarts', cartController.getCarts)
router.delete('/deleteitems', cartController.deleteItems)
router.patch('/updatejumlah', cartController.updateJumlah)
router.delete('/deletecarts', cartController.deleteCarts)

module.exports = router