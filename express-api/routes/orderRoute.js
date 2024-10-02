const express=require('express')
const { postOrder, orderList, orderDetails, updateStatus, userOrders, generateSignature } = require('../controller/orderController')
const router= express.Router()


router.post('/postorder',postOrder)
router.get('/orderlist',orderList)
router.get('/orderdetails/:id',orderDetails)
router.put('/updatestatus/:id',updateStatus)
router.get('/userorderlist/:userId',userOrders)
router.post('/generate-signature',generateSignature)



module.exports=router 