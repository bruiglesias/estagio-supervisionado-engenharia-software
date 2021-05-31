import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("solicitacao")
class Solicitacao{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    justificativa: string

    @Column()
    status: string

    @CreateDateColumn()
    data_solicitacao: Date
    
    @CreateDateColumn()
    criado_em: Date
}

export { Solicitacao }