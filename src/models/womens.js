const mongoose = require('mongoose');

const womenSchema= new mongoose.Schema({
    fullname:{
        type:String,
        reuired:true,
    },
    phone:{
        type:Number,
        reuired:true,
    },
    email:{
        type:String,
        reuired:true,
    },
    password:{
        type:String,
        reuired:true,
    }
})
//creating collection;
const WomensData= new mongoose.model("WomensData",womenSchema);

module.exports=WomensData;
