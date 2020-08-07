const mongoose=require('mongoose');

var TaskSchema=new mongoose.Schema({
    Today:{
        type:String,
    },
    Done:{
        type:Boolean,
    },
    Pending:{
        type:Boolean,
    }
    
});
module.exports =mongoose.model('task',TaskSchema);