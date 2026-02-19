import exp from "express";
import { ProductModel } from "../Models/productModel.js";
export const productApp = exp.Router();
productApp.use(exp.json());


//create product
productApp.post('/products',async(req,res)=>{
        //get product data from req body
        const newProduct=new ProductModel(req.body);
        //save in database
        let savedProduct=await newProduct.save();
        //send message
        res.status(201).json({message:"product createdd successfully",payload:savedProduct});
});

//get product
productApp.get('/products',async(req,res)=>{
    try{
        const products=await ProductModel.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});


