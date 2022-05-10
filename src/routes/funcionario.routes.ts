import { Request, Response, Router } from "express";
import { FuncionarioService } from "../services/funcionario.service";
import { createMessage } from "../util/message.util";



const routes = Router();
const funcionarioService = new FuncionarioService();

routes.post('/login', async (req:Request,res:Response) =>{
    const auth = req.body;
    const funcionario = await funcionarioService.getFuncionarioByEmailAndPassword(auth.email,auth.senha);

    if(!funcionario){
        res.status(400).send(createMessage('Funcionário não encontrado!'));
    }
    res.send(funcionario);
})

routes.get('/exists/:matricula', async(req:Request,res:Response)=>{
    const matricula= Number(req.params.matricula);
    const funcionarios = await funcionarioService.checkUserMatriculaTaken(matricula);

    if(!funcionarios){
        res.status(404).send(createMessage("Funcionário não encontrado!"));
    }
    res.send(funcionarios);
});

routes.post('/signup', async (req:Request,res:Response)=>{
    const funcionario = req.body;
    if(!funcionario){
        res.status(404).send(createMessage("Funcionário é obrigatório"));
    }
    const funcionarioCriado = await funcionarioService.addFuncionario(funcionario);
    res.status(201).send(funcionarioCriado);
})

routes.get('/listarUser', async (req:Request, res:Response)=>{
    const funcionario = await funcionarioService.getFuncionarios();
    res.send(funcionario);
})

routes.delete('/delete/:id', async(req:Request, res:Response)=>{
    const funcionarioId = req.params.id;
    if(!funcionarioId){
        return res.status(400).send(createMessage('Por favor, nos passe um funcionário'));
    }

    const funcionarioRemovido = await funcionarioService.deleteFuncionario(Number(funcionarioId));
    res.send(funcionarioRemovido);
})
export default routes;