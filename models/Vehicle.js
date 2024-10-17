import mongoose from "mongoose";
const vechicleSchema= new mongoose.Schema({
    ownerName: {type: String},
    vehicleModel: {type: String},
    LicensePlate: { type:String},
    serviceDueDate:{type: String },
});
//  schema is a method or function
const Vehicle = mongoose.model("Vehicle", vechicleSchema);
export default Vehicle;