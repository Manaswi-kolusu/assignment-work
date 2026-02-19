import exp from "express";
import { hash, compare } from "bcryptjs";
import { userModel } from "../Models/userModel.js";
import { ProductModel } from "../Models/productModel.js";

export const userApp = exp.Router();
userApp.use(exp.json());

//craete user
userApp.post('/user', async (req, res) => {
    //get new user from requsest
    let newObj = req.body;
    //hash the password
    let hashedPassword = await hash(newObj.password, 12)
    //replace the plane password with hashed password
    newObj.password = hashedPassword;
    //create new user document
    let newUserDoc = new userModel(newObj);
    //save in db
    await newUserDoc.save();
    //send response
    res.status(201).json({ message: "user created" });

});

//ad product to the cart
userApp.get('/user', async (req, res) => {
    //fetch all users from db
    let users = await userModel.find();
    //send response
    res.json({ message: "users", users });
});

// userApp.put('/user-cart/user-id/:uid/product-id/:pid', async (req, res) => {
//     //read uid and pid from url parameters
//     let x = req.params;//{uid:"",pid:""}
//     //console.log(x)
//     //check user
//     let userObj = await userModel.findById(x.uid);
//     //console.log(userObj)
//     if (!userObj) {
//         return res.status(401).json({ message: "user not found" })
//     }
//     //check product
//     let product = await ProductModel.findById(x.pid);
//     if (!product) {
//         return res.status(401).json({ message: "product not found" });
//     }
//     //perform the update
//     let modifiedUser = await userModel.findByIdAndUpdate(
//         x.uid,
//         { $push: { cart: { product: x.pid } } },
//         { new: true }).populate("cart.product");
//     //res
//     res.status(200).json({ message: "user", payload: modifiedUser });
// });



//read user by id
userApp.get('/user/:id', async (req, res) => {
    let { id } = req.params
    //find user
    let userObj = await userModel.findById(id).populate("cart.product");
    //get res
    res.status(200).json({ message: "user", payload: userObj });
});

//add products to the cart with quantity
userApp.put('/user-cart/user-id/:uid/product-id/:pid', async (req, res) => {
    let x = req.params
    let userObj = await userModel.findById(x.uid);
    if (!userObj) {
        return res.status(401).json({ message: "user not found" });
    }
    let newProduct = await ProductModel.findById(x.pid);
    if (!newProduct) {
        return res.status(401).json({ message: "product not found" });
    }
    6
    
    // let modifiedUser = await userModel.findByIdAndUpdate(
    //     x.uid,
    //     { $push: { cart: { product: x.pid } } },
    //     { $push: { cart: { quantity: x.pid } } },
    //     { new: true }).populate("cart.product");
    // //res
    // res.status(200).json({ message:"user", payload: modifiedUser });

});