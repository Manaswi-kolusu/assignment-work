import { Schema,model } from "mongoose";

// create user schema

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"minimum length should be 4"],
        maxLength:[6,"maximum length is exceded , shouldn't be more than 6"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"Age should be above 18"],
        max:[25,"Age should be less than 25"]
    }
},{
    strict:"throw",
    timestamps:true
});

// create user model
export const userModel = model("user",userSchema);