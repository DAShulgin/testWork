const Router = require('express')
const router = new Router()
const ProductController = require('../controller/product.controller')

router.get('/product/:id', ProductController.getOneProduct)
router.get('/product', ProductController.getProducts)
router.post('/product', ProductController.createProduct)
router.put('/product', ProductController.updateProduct)
router.delete('/product/:id', ProductController.deleteProduct)

module.exports = router