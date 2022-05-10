import { Funcionario } from "../entity/funcionario";
import { FuncionarioRepository } from "../repository/funcionario.repository";

export class FuncionarioService{

    private funcionario: Array<Funcionario> = [];

    getFuncionarios(){
        return FuncionarioRepository.getAll();
    }

    getFuncionarioByEmailAndPassword(email:string, senha:string){
        return FuncionarioRepository.findByEmailAndPassword(email,senha);
    }

    addFuncionario(funcionario:Funcionario){
        return FuncionarioRepository.create(funcionario);
    }

    deleteFuncionario(email:string){
        return FuncionarioRepository.delete({email:email})
    }

    checkUserMatriculaTaken(matricula:number){
        return FuncionarioRepository.findByMatricula(matricula);
    }
}