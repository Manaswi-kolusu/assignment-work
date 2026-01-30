import exp from 'express'
//create mini exprees app
export const userapp=exp.Router();

let users=[];
userapp.get('/users',(req,res)=>{
    //send users data in response
    res.status(200).json({message:"all users",payload:users})
})
//post req handling route(create user)
userapp.post('/users',(req,res)=>{
    //get user data from req body
    let newuser=req.body;
    //console.log("new user",newuser);
    //insert new user in users array
    users.push(newuser);
    //send response
    res.status(201).json({message:"user created"})

})
//put req handling route(update user)
userapp.put('/users/:id',(req,res)=>{
    //get modified user from req
    let modifieduser=req.body;
    //find the user with id exists in array
    let userindex=users.findIndex((userobj)=>userobj.id==modifieduser.id);
    //if user not found,send response as "user not found"
    if(userindex==-1){
       return res.status(200).json({message:"user not found"});
    }
    //if user found,then modify the user
    let seleteduser=users.splice(userindex,1,modifieduser);
    //send res as "user modified"
    res.status(200).json({message:"user modified"})
})

//read user by id
userapp.get('/users/:id',(req,res)=>{
    //read id from url parameter
    let id=Number(req.params.id);
    //read user by this id
    let selecteduser=users.find(userobj=>userobj.id===id);
    if(!selecteduser){
        return res.status(200).json({message:"user not found"})
    }
    res.status(200).json({message:"user found",payload:selecteduser})

})
//delete req handling route(delete user)
// DELETE req handler
userapp.delete('/users/:id',(req,res) => {
    let id = Number(req.params.id);
    let reqUserIdx = users.findIndex(user => user.id === id);
    if(reqUserIdx!=-1){
    let deletedObj = users.splice(reqUserIdx,1)
    res.json({message:"user deleted",deletedObj,payload:users});
    }else{
        res.status(404).json({message:"user not found"});
    }
})