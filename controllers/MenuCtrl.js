const Menu = require('../models/MenuModel')

const MenuCtrl = {
	getAllMenu: async (req,res) =>{
		try{

		} catch(err){
			res.json({
				msg: err.message
			})
		}
	},
	getMenu: async (req,res) =>{
		try{

		} catch(err){
			res.json({
				msg: err.message
			})
		}
	} 
}

module.exports = MenuCtrl;