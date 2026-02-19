import exp from "express";
import { connect } from "mongoose";
import { userApp } from "./API/userApi.js";
import { productApp } from "./API/productApi.js";

//createe http server
const app=exp();

//connect to mongodb
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/ECommerce')
        console.log("connected to DataBase ");
        app.listen(3000,()=>console.log("listeng to the port 3000"));
    }
    catch(err){
        console.log("error in connecting db",err);
    }
}
//use body parser middleware
app.use(exp.json());
app.use('/userApi',userApp);
app.use('/productApi',productApp)
connectDB();

//error handling midleware
app.use((err,req,res,next) => {
    res.status(500).json({message:"error occured",reason:err.message});
})