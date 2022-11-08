const Menu = require('../models/MenuModel')

const MenuCtrl = {
	getAllMenu: async (req,res) =>{
		try{
			const fetchAllMenu = await Menu.find()
			res.json(fetchAllMenu)
		} catch(err){
			res.json({
				msg: err.message
			})
		}
	},
	getMenu: async (req,res) =>{
		try{
			const {id} = req.body
			const fetchMenu = await Menu.findById({_id:id})
			res.json(fetchMenu)
		} catch(err){
			res.json({
				msg: err.message
			})
		}
	},
	addMenu: async (req,res) => {
		try{
			const MenuName = req.body.MenuName
			const ExtraMenu = req.body.ExtraMenu
			const MainPrice = req.body.MainPrice
			const NewMenu = new Menu({
				MenuName: MenuName,
				ExtraMenu: ExtraMenu,
				MainPrice: MainPrice
			}) 
			await NewMenu.save()
			res.send("Add New Order Successfuly !!!")
		} catch(err){
			res.json({
				msg:err.message
			})
		}
	}
}

module.exports = MenuCtrl;