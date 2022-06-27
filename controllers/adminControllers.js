import schemaAdmin from "../models/AdminsModel.js";
import bcrypt from "bcryptjs"



export const getAllAdmin = async (req,res)=>{
    let allData = await schemaAdmin.find()
    if(!allData){
        res.status(404).json({
            massege : "data not found"
        })
    }else{
        res.status(200).json(allData)
    }
};


export const getSingleAdmin = async (req,res)=>{
    const single_data  = await schemaAdmin.findById(req.params.id);
    if(!single_data){
        res.status(401).json({
            massege : "data not found"
        });

    }else{
        res.status(201).json(single_data);
    }
};


export const createAdmin = async  (req,res)=>{

    const {name,email,password,username,} = req.body;
    
    // create hash password
    const solt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,solt);

    if(!name || !email || !password || !username){
        res.status(400).json({
            massege : "All fields are required"
        });
    }else{
       
        await schemaAdmin.create({
            ...req.body,
            password : hashPassword
        });
        res.status(200).json({
            massege : "data create successful"
        })

    }

};



export const deleteAdmin = async  (req,res)=>{
    const single_data  = await schemaAdmin.findById(req.params.id);
    if(!single_data){
        res.status(401).json({
            massege : "data not found"
        });

    }else{
          await schemaAdmin.findByIdAndDelete(req.params.id);
        res.status(201).json({
            massege : `${single_data.name} data delete successful`
        });
    }


};


export const editAdmin = async (req,res)=>{

    const {password} = req.body;
    
    // create hash password
    const solt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,solt);

    const single_data  = await schemaAdmin.findById(req.params.id);
    if(!single_data){
        res.status(401).json({
            massege : "data not found"
        });

    }else{
        await schemaAdmin.findByIdAndUpdate(single_data._id,{
            ...req.body,
            password : hashPassword
        },{
            new : true
        })
        res.status(201).json({
            massege : `data edit successful`
        });
    }
};


export const adminProfile =  (req,res)=>{
    res.json(req.user)
}
export const adminHome = (req,res)=>{
    res.send("Home")
}