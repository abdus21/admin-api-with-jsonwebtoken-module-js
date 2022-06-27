import mongoose from "mongoose";

 let mongoSchema = new mongoose.Schema({
     name : {
         type : String,
         required : [true,"name field  required"]
     },
     email : {
         type : String,
         required : [true,"email field required"],
         unique : true
     },
     username : {
         type : String,
         required : [true,"username field required"],
         unique : true,
         minlength : 5,
         maxlength : 8
     },
     password : {
         type : String,
         required : [true,"password field required"],
         unique : true,
     },

 },{
     timestamps : true
 })


 const schemaAdmin = mongoose.model('Admin', mongoSchema)
 export default schemaAdmin