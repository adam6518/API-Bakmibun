var express = require('express')
var router = express.Router()
const { productController } = require('../1.Controllers')
var uploads = require('../3.Helpers/multerMenu')

router.get('/getproducts', productController.getProducts)
router.delete('/deleteproducts', productController.deleteProducts)
router.post('/posttoproducts', uploads.single('pilih_gambar'), productController.postToProducts)
router.get('/filterproducts', productController.filterProducts)
router.get('/getmakanan', productController.getMakanan)
router.get('/getminuman', productController.getMinuman)
router.get('/getes', productController.getEs)

module.exports = router