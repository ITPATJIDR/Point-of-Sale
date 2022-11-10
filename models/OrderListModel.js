const mongoose =require('mongoose');

const OrderlistSchema = mongoose.Schema({
	MenuList:[
		{
			OrderName: String,
			ChooseMenu: [
				{
					ExtraMenu: String,
					ChooseExtraMenu: String,
					Price:Number
				}
			],
			OrderPrice: Number
		}
	]
})
module.exports = mongoose.model("OrderList",OrderlistSchema)
