const mongoose =require('mongoose');

const OrderlistSchema = mongoose.Schema({
	OrderName: String,
	ChooseMenu: [
		{
			label:String,
			value:Number
		}
	],
	OrderPrice: Number
})
module.exports = mongoose.model("OrderList",OrderlistSchema)
