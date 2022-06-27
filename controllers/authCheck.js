import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import schemaAdmin from "../models/AdminsModel.js";


// admin login auth check
const authLogin = async (req,res)=>{
    const {email,password} = req.body;
     let login_data = await schemaAdmin.findOne({email});

     if(!login_data){
         res.status(401).json({
             message : "invalid email"
         })
     }else if(!password){
        res.status(401).json({
            message : "please inter password"
        })
     } else{

         if( (await bcrypt.compare(password,login_data.password)) ){
             // create jwt token
             let token = jwt.sign({id : login_data._id},process.env.JWT_SECTET,{
                 expiresIn : "1d"
             })
             res.status(200).json({
                 name : login_data.name,
                 email : login_data.email,
                 password : login_data.password,
                 username : login_data.username,
                 token : token
             })
         }else{
            res.status(401).json({
                message : "wrong password"
            })
         }

     }
}

export default authLogin