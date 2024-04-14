import { Router } from "express";
import { methods as personaController} from "../controllers/persona.controller";
const router=Router();

router.get("/", personaController.getPersona);

export default router;