const productController = require('../controller/ProductController')
const router = require('express').Router()

router.delete('/api/products/:id', productController.deleteProduct)

// router.get('/api/products/:id', productController.getSingleProduct)

module.exports = router

