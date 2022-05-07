import { Router } from "express";
import funcionarioRoutes from "./funcionario.routes"
const router = Router();

router.use('/user',funcionarioRoutes);

export default router;