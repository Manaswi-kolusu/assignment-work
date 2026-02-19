import {Schema,model} from 'mongoose';
//create product schema
const productSchema=new Schema({
    productName:{
        type:"String",
        required:[true,"product name is required"]
    },
    price:{
        type:"Number",
        required:[true,"price is required"]
    },
    brand:{
        type:"String",
        required:[true,"brand is required"]
    }
},{
    strict:"throw",
    timestamps:true
});     

export const ProductModel=model('product',productSchema);