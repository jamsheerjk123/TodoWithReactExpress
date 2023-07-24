const express = require('express');
const bodyParser = require('body-parser')
const port =5003;
var app = express();
app.use(bodyParser.json());
const cors  = require("cors")
const todoRoute = require("./routes/todoRoutes")

app.use(cors())

app.use('/task',todoRoute)

//Db Connection
// const db =mysql.createConnection({
//     host     :"localhost",
//     user     :"loremine",
//     password :"quickstart",
//     database :"study"
// })
//  db.connect();

// app.get('/',(req,res)=>{
//   const sql ="SELECT * FROM tasks";
//   db.query(sql,(err,data)=>{
//     if(err)res.send('something went wrong')
//     res.json({"data":data})
//   })
// })

// app.post('/',(req,res)=>{
//   const sql ="SELECT * FROM tasks";
//   db.query(sql,(err,data)=>{
//     if(err)res.send('something went wrong')
//     res.json({"data":data})
//   })
// })





  
  
  app.listen(port,()=>{
    console.log('Backend running')
  })
  