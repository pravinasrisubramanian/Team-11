import mongoose from "mongoose";
const centerSchema= new mongoose.Schema({
    centerName: {type: String},
    location: {type: String},
    contactNumber: { type:String},
    secialization:{type: String,enm:["repair","maintanence","both"] },
});
//  schema is a method or function
const Center = mongoose.model("Center", centerSchema);
export default Center;