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

app.get('/vehicles', async (req, res) => {
    try {
        const vehicles = await (Vehicle.find());
        res.status(200).json(vehicles);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.post('/veh', async (req, res) => {
    let { ownerName, vehicleModel, LicensePlate, serviceDueDate } = req.body; 

    
    if (ownerName && vehicleModel && LicensePlate && serviceDueDate) {
        try {
            
            const newVehicle = new Vehicle({ ownerName, vehicleModel, LicensePlate, serviceDueDate });
            await newVehicle.save();

            res.status(201).json({
                message: `Vehicle added successfully for ${ownerName}.`,
                vehicle: newVehicle,
            });
        } catch (err) {
            res.status(500).json({ error: 'Failed to add vehicle to the database', details: err.message });
        }
    } else {
        res.status(400).json({ error: 'ownerName, vehicleModel, LicensePlate, and serviceDueDate are required' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
