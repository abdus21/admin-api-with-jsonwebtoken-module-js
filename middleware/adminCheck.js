import jwt from "jsonwebtoken";
import schemaAdmin from "../models/AdminsModel.js";

    // login auth check
    const loginCheck = async (req,res,next)=>{

      if(req.headers.authorization){

        try{
          // take jwt token from request headers...
        const token = req.headers.authorization.split(' ')[1];
        // verify jwt token 
        const {id} = jwt.verify(token,process.env.JWT_SECTET);
          req.user = await schemaAdmin.findById(id);
          next()

        }catch(error){
          console.log(error);
        }
  

      }else{
        res.status(401).json({
          message : "token not found"
        })
      }

    }


export default loginCheck