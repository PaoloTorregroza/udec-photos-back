import { Router } from "express";
import PhotoController from "../controllers/PhotoController";

const router = Router();

const controller = new PhotoController();

router.get("/", (req, res) => controller.all(req, res));
router.post("/", (req, res) => controller.save(req, res));
router.get("/:id", (req, res) => controller.one(req, res));
router.put("/", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
