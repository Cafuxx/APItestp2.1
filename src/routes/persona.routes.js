import { Router } from "express";
import { methods as personaController } from "../controllers/persona.controller";
const router=Router();

router.get("/", personaController.getPersona);
router.get("/:id", personaController.getPersona);
router.post("/", personaController.addPersona);
router.put("/:id", personaController.updatePersona);
router.delete("/:id", personaController.getPersona);


export default router;