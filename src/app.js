const express=require('express');
const path = require('path');
const hbs=require('hbs');
const WomensData = require("./models/womens");
const con=require('../src/db/conn');
const router=require("./routers/womenapi");
const app=express();
const port=process.env.PORT || 5001;



const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")


app.use(express.json());
app.use(router);
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));

app.set("view engine","hbs");
app.set("views",template_path)
hbs.registerPartials(partials_path)


app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/login',(req,res)=>{
    res.render("login");
})

//login check
app.post('/login',async(req,res)=>{
    try{
     const email=req.body.email;
     const password=req.body.password;
 
     userEmail= await WomensData.findOne({email:email});
 
     if(userEmail.password === password){
         res.status(201).render('index');
     }else{
         res.send("invalid login details")
     }
 
    }catch(e){
     res.status(400).send("invalid details of login")
 
    }
     
 })


app.listen(port,()=>{
    console.log(`connection is live on port no. ${port}`)
})