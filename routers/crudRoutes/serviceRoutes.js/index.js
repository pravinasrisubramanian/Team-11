import { Router } from "express";
import Service from "../../../models/Service.js";

const router = Router();

router.post("/go", async (req, res) => {
  try {
    const service = Service(req.body);
    await service.save();
    res.send("Data created successfully!");
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.get("/come/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.find({ id }); 
    if (!service.length) {
      return res.status(404).json({ message: "service not found" });
    }
    res.status(200).send(service);
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.put("/case/:id", async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return res.status(404).send("unable to find tenant");
    }

    res.send(service);
  } catch (error) {
    res.status(500).send("Error updating in tenant: " + error.message);
  }
});

router.delete("/case/:id", async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).send("unable to find tenant");
    }
    res.send(service); 
  } catch (error) {
    res.status(500).send("Error deleting  occur in tenant: " + error.message);
  }
});

export default router;