const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const vehicleSchema = new mongoose.Schema({
    ownerName: String,
    vehicleModel: String,
    LicensePlate: String,
    serviceDueDate: String    
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

const port = process.env.PORT || 4000;


const url = process.env.MONGODB_URL || "mongodb+srv://pravinaatlas:pravi_1234@cluster0.mcysr.mongodb.net/vehicleDB?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(bodyParser.json());

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB is connected"))
.catch(err => console.log("DB connection error:", err));