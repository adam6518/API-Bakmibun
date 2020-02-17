var express = require('express')
var router = express.Router()
const { transactionController } = require('../1.Controllers')
var upload = require('../3.Helpers/multerBukti')

router.post('/posttotransaction', upload.single('choose_file'), transactionController.postToTransaction)
router.patch('/statuschanger', transactionController.statusChanger)
router.get('/gettransaction', transactionController.getTranscantion)
router.delete('/deletetransaction', transactionController.deleteTransaction)
router.post('/posttotransactiondetails', transactionController.postToTransactionDetails)

module.exports = router