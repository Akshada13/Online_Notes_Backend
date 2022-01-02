//importing the express pacakage
const express = require('express');
//importing database connection function to call it in main file
const dbconnect=require('./db');
var cookieParser = require('cookie-parser');
const app = express()
var cors = require('cors');
const  path  = require('path')
require('dotenv').config()


app.use(cors())
//initializing the app
app.use(cookieParser());
//calling databse connection method
dbconnect.dbconnect()
//to use json as content type for request body allowing json 
app.use(express.json())
app.get('/', (req, res) => {
    res.send("Hello server started")
})

//testing the server connection
app.use('/api/user',require('./routes/user'))
//using routes we can make individual routes for different purpose and we call it main file using app.use and providing file location
app.use('/api/notes',require('./routes/NotesInsert'))
app.listen(process.env.PORT || 3001,()=>{
    console.log("Server is running on port 3001")
})
//making server at 3001 port number