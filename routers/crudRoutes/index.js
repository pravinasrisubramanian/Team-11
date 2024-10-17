import { Router } from "express";
import Vehicle from "../../models/vehicle.js";
const router = Router();
router.post("/go", async (req, res) => {
  try {
    const vehicle = Vehicle(req.body);
    await vehicle.save();
    res.send("Data created sucessfully!");
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.get("/come", async ( res) => {
  try {
    const vehicle = await Vehicle.find(); 
    res.send(vehicle);
  } catch (error) {
    res.status(500).send("Error: " + error); 
  }
});
export default router;