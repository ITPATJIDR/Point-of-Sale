const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const app = express();
const PORT = process.env.PORT || 5000

app.use(cookieParser());
app.use(express.json())
app.use(cors({origin:"http://localhost:3000",credentials:true}));
app.get("/",(req,res)=>{
	res.send("Hi")
})

app.listen(PORT, ()=>{
	console.log(`listening on port ${PORT}`)
})