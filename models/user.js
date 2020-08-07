const mongoose=require("mongoose");


var UserSchema=new mongoose.Schema({
    Name:{
        type:String,
        default:null
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
    },
    Device_token:{
        type:String,
        default:null
    },
    Access_token:{
        type:String
    },
    Latitude:{
        type:String
    },
    Longitude:{
        type:String
    },
    Is_verify:{
        type:Boolean,
        required:true,
        default:1
    },
    Location:{
        type:{
        type:String,
        default:'Point',
        },
        coordinates:{
            type:[Number],
            
    }
}

});
module.exports =mongoose.model('user',UserSchema);