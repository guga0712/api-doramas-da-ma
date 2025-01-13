import { Router } from "express";
import {
  createDorama,
  getDoramas,
  deleteDorama,
} from "../controllers/doramaController.js";

const router = Router();

router.post("/doramas", createDorama);
router.get("/doramas", getDoramas);
router.delete("/doramas/:id", deleteDorama);

export default router;
