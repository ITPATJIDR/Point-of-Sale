const router = require('express').Router();
const OrderListCtrl = require('../controllers/OrderListCtrl')

router.post('/addOrder',OrderListCtrl.addOrder)
router.get('/getOrder',OrderListCtrl.getOrder)
router.post('/deleteOrder',OrderListCtrl.deleteOrder)
router.get('/getAllOrder',OrderListCtrl.getAllOrder)
router.get('/deleteAllOrder',OrderListCtrl.deleteAllOrder)

module.exports = router