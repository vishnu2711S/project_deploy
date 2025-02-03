const productController = require('../controller/ProductController')
const router = require('express').Router()

router.get('/api/products', productController.getAllProduct)
router.post('/api/products', productController.addNewProduct)
router.put('/api/products/:id', productController.updateProduct)
router.delete('/api/products/:id', productController.deleteProduct)


// router.get('/api/products/:id', productController.getSingleProduct)

module.exports = router

