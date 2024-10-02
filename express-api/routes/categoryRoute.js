const express=require('express')
const { postCategory, showCategoryList, categoryDetails, updateCategory, deleteCategory } = require('../controller/categoryController')
const { requireAdmin } = require('../controller/authController')
const { categoryValidation, validation } = require('../validation/validator')
const router= express.Router()

router.post('/postcategory',requireAdmin,categoryValidation,validation,postCategory)
router.get('/categorylist',showCategoryList)
router.get('/categorydetails/:id',categoryDetails)
router.put('/updatecategory/:id',requireAdmin,categoryValidation,validation,updateCategory)
router.delete('/deletecategory/:id',requireAdmin,deleteCategory)


module.exports=router
