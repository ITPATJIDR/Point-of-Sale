const OrderList = require('../models/OrderListModel')

const OrderList = {
	addOrder: async (req,res) =>{
		try{

		} catch(err){
			res.json({
				msg: err.message
			})
		}
	},
	getOrder: async (req,res) =>{
		try{

		} catch(err){
			res.json({
				msg: err.message
			})
		}
	},
	DeleteOrder: async (req,res) =>{
		try{

		} catch(err){
			res.json({
				msg: err.message
			})
		}
	},
}

module.exports = OrderList;