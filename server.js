import express from "express";
import dotenv from "dotenv";
import Colors from "colors"
import connectMongoDB from "./configs/database.js";
import router from "./routers/adminRouter.js";


const app = express();

// json body init 
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// config dotenv
dotenv.config()

// process port
const port = process.env.SERVER_PORT;


connectMongoDB()



app.use('/api/admin',router)




// listen server
app.listen(port,()=>{
    console.log('server is runnig');
})