const mongoose =require('mongoose');
const con=mongoose.connect("mongodb://0.0.0.0:27017/apidbs",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
    
}).then(()=>{
    console.log("Connection Sucessfully");
}).catch((e)=>{
    console.log("No Connection");
})
module.exports=con;


