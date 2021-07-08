import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("solicitacao")
class Solicitacao{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    id_aluno: number

    @Column()
    justificativa: string

    @Column()
    status: string
   
    @CreateDateColumn()
    criado_em: Date
}

export { Solicitacao } 