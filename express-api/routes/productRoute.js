const express=require('express')
const { postProduct, productList, productDetails, updateProduct, deleteProduct } = require('../controller/productController')
const { requireAdmin } = require('../controller/authController')
const router= express.Router()
const {upload,handleMulterError}=require('../middleware/file-upload')
const { productValidation, validation } = require('../validation/validator')

router.post('/postproduct',upload.single('product_image'),productValidation,validation,postProduct)
router.get('/productlist',productList)
router.get('/productdetails/:id',productDetails)
router.put('/updateproduct/:id',upload.single('product_image'),productValidation,validation,requireAdmin,updateProduct)
router.delete('/deleteproduct/:id',requireAdmin,deleteProduct)
router.use(handleMulterError)

module.exports=router
