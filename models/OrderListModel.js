const mongoose =require('mongoose');

const OrderlistSchema = mongoose.Schema({
	MenuList:[
		{
			OrderName: String,
			ChooseMenu: [
				{
					label:String,
					value:Number
				}
			],
			OrderPrice: Number
		}
	]
})
module.exports = mongoose.model("OrderList",OrderlistSchema)
