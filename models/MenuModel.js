const mongoose = require('mongoose')

const MenuSchema = mongoose.Schema({
	MenuName: String,
	ExtraMenu:[
		{ 
			ExtraMenuName: String,
			ListMenu:[
				{ 
					Name: String,
					Price:Number
				}
			]
		}
	],
	MainPrice:Number
})

module.exports = mongoose.model("Menu",MenuSchema) 