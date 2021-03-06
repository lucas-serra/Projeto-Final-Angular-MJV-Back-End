import { getConnection } from "typeorm";
import { Funcionario } from "../entity/funcionario";


export class FuncionarioRepository{

    private funcionario: Array<Funcionario> = [];
    static getAll(){
        const funcionarioRepository = getConnection().getRepository(Funcionario);
        return funcionarioRepository.find();
    }

    static findByEmailAndPassword(email:string, senha:string){
        const funcionarioRepository = getConnection().getRepository(Funcionario);
        return funcionarioRepository.findOne({where: {email,senha}});
    }

    static findByMatricula(matricula:number){
        const funcionarioRepository = getConnection().getRepository(Funcionario);
        return funcionarioRepository.findOne({where:{matricula}});
    }

    static create(funcionario:Funcionario){
        const funcionarioRepository = getConnection().getRepository(Funcionario);
        return funcionarioRepository.insert(funcionario);
    }

    static delete(id:number){
        const funcionarioRepository = getConnection().getRepository(Funcionario);
        return funcionarioRepository.delete(id);
    }
}