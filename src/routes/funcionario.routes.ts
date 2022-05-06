import { Request, Response, Router } from "express";
import { FuncionarioService } from "../services/funcionario.service";
import { createMessage } from "../util/message.util";
//import  jwt  from "jsonwebtoken";
import { Funcionario } from "../entity/funcionario";


const routes = Router();
const funcionarioService = new FuncionarioService();
const empregado = new Funcionario();

routes.post('user/login', async (req:Request,res:Response) =>{
    const auth = req.body;
    const funcionario = await funcionarioService.getFuncionarioByEmailAndPassword(auth.email,auth.senha);

    if(!funcionario){
        res.status(400).send(createMessage('Funcionário não encontrado!'));
    }
    // const token = jwt.sign({id: empregado[0].id }, process.env.APP_SECRET {
    //     expiresIn: '1d'
    // })
    res.send(funcionario);
})

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

routes.get('user/listarUser', async (req:Request, res:Response)=>{
    const funcionario = await funcionarioService.getFuncionarios();
    res.send(funcionario);
})

export default routes;