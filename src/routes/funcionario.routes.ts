import { Request, Response, Router } from "express";
import { FuncionarioService } from "../services/funcionario.service";
import { createMessage } from "../util/message.util";

const routes = Router();
const funcionarioService = new FuncionarioService();

routes.get('user/exists/:matricula', async(req:Request,res:Response)=>{
    const matricula= Number(req.params.matricula);
    const funcionarios = await funcionarioService.checkUserMatriculaTaken(matricula);

    if(!funcionarios){
        res.status(404).send(createMessage("Funcionário não encontrado!"));
    }
    res.send(funcionarios);
});
routes.post('user/signup', async (req:Request,res:Response)=>{
    const funcionario = req.body;

    if(!funcionario){
        res.status(404).send(createMessage("Funcionário é obrigatório"));
    }
    const funcionarioCriado = await funcionarioService.addFuncionario(funcionario);
    res.status(201).send(funcionarioCriado);
})

export default routes;