const app = require("./app");
const express=require("express");
const mongoose=require("mongoose")
const connectionParams = {
  useNewUrlParser:true,
  useUnifiedTopology:true,
}
const initMongoDB = async()=>{
  try{
      await mongoose.connect('mongodb+srv://rachanour354:rachida00@cluster0.9mrk61v.mongodb.net/sud_gold_start?retryWrites=true&w=majority',connectionParams);
      console.log("Connected to mongoDB");
  }
  catch(err){
      console.log(err);
  }
} 

initMongoDB();
const port =3000;
app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
});