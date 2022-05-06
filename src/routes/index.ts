import { Router } from "express";
import funcionarioRoutes from "./funcionario.routes"
const router = Router();

router.use('/users',funcionarioRoutes);

export default router;