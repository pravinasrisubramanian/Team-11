import mongoose from "mongoose";
const serviceSchema= new mongoose.Schema({
    vehiclelicenseplate: {type: String},
    serviceDate: {type: String},
    servicetype: { type:String, enum:["repair","maintanence"]},
    serviceStatus:{type: String,enum:["completed","pending"]},
    remarks:{type:String},
});
//  schema is a method or function
const Service= mongoose.model("Service", serviceSchema);
export default Service;