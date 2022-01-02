const mongoose=require('mongoose');
require('dotenv').config()
//importing mongoose library which is used to ease the databse related work by providing built in methods such as schema
const url=process.env.MONGO_URL;
//unique string of the localhost mongodb databse
const dbconnect= ()=>{mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("connected to database");
})}
//function to connect to mongodb database which accepts url and callback function
module.exports={dbconnect}
//exporting dbconnect function