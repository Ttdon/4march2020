
const express=require("express");
const mongoose=require("mongoose");
const user=require("../models/user");
const bcrypt=require("bcryptjs");
const objectid=require("mongoose").Types.objectId;
const Joi=require("@hapi/joi");

module.exports.user_details= (req,res)=>{
    console.log("hi there");
    //res.json("Hello there all of you");
    user.find((err,docs)=>{
        if(!err){
            console.log("get api");
            res.send(docs)}
        else{console.log("error in retriving data")}
    });
};
exports.user_create = (req,res)=>{
    console.log("enter in create post")
   
    res.json({ msg: "Hello there all of in create for you",});
    console.log(req.body);
    //const collections =req.params.collection;
    //console.log(req.body);
    let users=new user({
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        password:req.body.password,
        Device_token:req.body.Device_token,
        Access_token:req.body.Access_token,
        Is_verify:req.body.Is_verify,
        Location:req.body.Location

    });
    //let users=new collections(req.body);
    // const val=validateUser(user);
    // if(!val==null){
        console.log("hello");
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(users.password,salt,function(err,hash){
            users.password = hash;
            users.save()
            .then(() => console.log('Successsss'))
            .catch((err) => {
                console.log('ERRorr- ', err);
        })
    })

   
    });
}
//};
module.exports.user_update=(req,res)=>{
    user.findByIdAndUpdate(objectid, { $set: req.body }, function (err,user) {
        if (err) return(err);
        res.send('User is  udpated.');
    });
}

module.exports.user_delete = (req, res)=> {
    user.findByIdAndRemove(req.params.id, function (err) {
         if (err) return(err);
         res.send('Deleted successfully!');
    })
};
// function validateUser(user){
//     const schema = {
//         Name : Joi.string().required().min(5).max(50),
//         Email : Joi.string().required().min(10).email().max(255),
//         password : Joi.string().required().min(5).max(1024)
//     };
//     console.log(Joi.validate(user,schema));
//     return Joi.validate(user,schema);
// }
