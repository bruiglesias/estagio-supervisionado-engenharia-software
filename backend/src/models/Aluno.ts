import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("aluno")
class Aluno{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    id_curso: number

    @Column()
    matricula: string

    @Column()
    nome: string
    
    @Column()
    email: string

    @Column()
    telefone: string
    
    @CreateDateColumn()
    criado_em: Date
}

export { Aluno }