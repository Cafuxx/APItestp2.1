import { Router } from "express";
import { methods as personaController } from "../controllers/persona.controller";
const router=Router();

router.get("/", personaController.getPersona);
router.get("/:id", personaController.getPersona);
router.post("/", personaController.addPersona);

export default router;