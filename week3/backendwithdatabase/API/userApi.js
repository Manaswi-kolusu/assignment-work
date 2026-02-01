import exp from "express";
import { userModel } from "../models/userModel.js";

// create a mini-express server
export const userApp = exp.Router();

// user-api routes
// To read user data from db
userApp.get("/users", async (req, res) => {
    // read users from db
    let usersList = await userModel.find({})
    res.json({ message: "Users data retreived successfully", usersList })
})

// post data to db
userApp.post("/users", async (req, res) => {
    // get new users from req
    let newUser = req.body;
    // let updatedUsers = await userModel.insertOne(newUser);
    // res.json({message:"user added successful"})
    // we use new model to validate the incoming data from req unlike in insert where data wont be verified against schema.
    let newUserDoc = new userModel(newUser);
    //save in db
    await newUserDoc.save()
    res.json({ message: "user created successfully" })
})


// read user by object id
userApp.get("/users/:id", async (req, res) => {
    let id = req.params.id;
    // find user in db
    let user = await userModel.findById(id);
    res.json({ message: "user found", user })
})

// update user
userApp.put("/users/:id",async(req,res) => {
    let id = req.params.id;
    let updatedUser = req.body;
    let user = await userModel.findByIdAndUpdate(id, { $set: { ...updatedUser }},{new:true,runValidators:true});
    res.json({message: "user found", user })
})

// delete user
userApp.delete("/users/:id",async(req,res)=> {
    let id = req.params.id;
    let deletedUser = await userModel.findByIdAndDelete(id);
    res.json({message: "user deleted", deletedUser });
})