const express=require('express')
const { testFunction } = require('../controller/testController')
const router=express.Router()



router.get('/demo',testFunction)


module.exports=router