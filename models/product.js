const mongoose=require('mongoose');

var ProductSchema=new mongoose.Schema({
    Name:{
        type:String,
    },
    Color:{
        type:String,
    
    },
    Price:{
        type:Number,
    },
    Brand:{
        type:String,
    }
});

module.exports =mongoose.model('product',ProductSchema);