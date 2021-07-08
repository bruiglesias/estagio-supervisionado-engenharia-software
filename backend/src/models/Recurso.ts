import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("recurso")
class Recurso{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    id_solicitacao: number
    
    @Column()
    justificativa: string

    @CreateDateColumn()
    criado_em: Date
    
}

export { Recurso } 