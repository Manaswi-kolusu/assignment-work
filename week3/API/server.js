// create HTTP server 

//import express module
import exp from 'express';
//import userapp and productapp
import { userapp } from './user-api.js';
import { productapp } from './product-api.js';
//create server
const app = exp()
//assign port number
app.listen(3000, () => {
    console.log("server listening on port 3000")
})

//body parsing middleware
app.use(exp.json());
app.use('/user-api',userapp);
app.use('/product-api',productapp);



