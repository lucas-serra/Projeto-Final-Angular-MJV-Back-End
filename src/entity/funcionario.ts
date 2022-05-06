import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'funcionarios'})
export class Funcionario {

    @PrimaryGeneratedColumn({name: 'id'})
    id?:number;

    @Column({name:'nome', type:'varchar', length: 255})
    nome?:string;

    @Column({name:'profissao', type:'varchar', length:255})
    profissao?:string;

    @Column({name:'salario',type:'numeric'})
    salario?:number;

    @Column({name:'email',type:'varchar', length:255})
    email?:string;

    @Column({name:'matricula',type:'numeric'})
    matricula?: number;

    @Column({name:'senha',type:'varchar',length:255})
    senha?:string;
}