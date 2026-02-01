import { Schema,model } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        minLength:[4,"product name is very little"],
        maxLength:[16,"product name is too big"],
        required:[true,"Name is required"]
    },
    brand:{
        type:String,
        minLength:[4,"product brand is very little"],
        maxLength:[16,"product brand is too big"],
        required:[true,"Brand is required"]
    },
    price:{
        type:Number,
        min:[100,"Price must be above 100"],
        max:[10000,"price cant be above 10000"],
        required:[true,"Price is mandatory"]
    },
    pid:{
        type:Number,
        min:[1,"id should be atleast 1"],
        required:[true,"id is necessary"]
    }
},
{
    strict:"throw",
    timestamps:true
})

export const productModel = model("product",productSchema);