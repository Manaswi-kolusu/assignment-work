import { Schema, model } from "mongoose";

//create cart schema
// const cartSchema = new Schema({
//     product: {
//         type: Schema.Types.ObjectId,
//         ref: 'product' //name of the product model
//     }
// });


const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product'
    },
    quantity:{
        type:"Number",
        default:1
    }
})
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    cart: {
        type: [cartSchema]
    }
})

export const userModel = model("user", userSchema);