import { Router } from 'express';
import PhotoController from '../controllers/PhotoController';

const router = Router();

const controller = new PhotoController();

router.get("/", (req, res) => controller.all(req, res));
router.post('/', (req, res) => controller.save(req, res));

export default router;
