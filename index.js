const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv');

dotenv.config();

app.use(cookieParser());
app.use(express.json())
app.use(cors({origin:["http://localhost:3000","https://point-of-sale-backend.vercel.app/"],credentials:true}));

app.use("/menu",require("./routers/MenuRouter"))
app.use("/order",require("./routers/OrderListRouter"))

app.get("/",(req,res)=>{
	res.send("HI Welcome to Point of sale made by ITPAT...")
})

mongoose.connect(
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	(err) =>{
		if(err) throw err;
		console.log("Connect to MongoDB");
	}
)

app.listen(PORT, ()=>{
	console.log(`listening on port ${PORT}`)
})