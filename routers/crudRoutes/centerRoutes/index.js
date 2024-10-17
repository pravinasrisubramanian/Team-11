import { response, Router } from "express";
import Center from "../../../models/Center.js";

const router = Router();

router.post("/go", async (req, res) => {
  try {
    const center = Center(req.body);
    await center.save();
    res.send("Data created successfully!");
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.get("/come/:specialization", async (req, res) => {
  try {
    const { specialization } = req.params;

    const center = await Center.find({ specialization }); // Retrieves tenants with the specified email
    if (!center.length) {
      return res.status(404).json({ message: "Center not found" });
    }
    res.status(200).send(center);
  } catch (error) {
    res.send("Error: " + error);
  }
});

 