const mongoose=require('mongoose');
const db=require("./config").db;
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){console.log("connection succeeded")}
    else{console.log("connection failed",err)};

});