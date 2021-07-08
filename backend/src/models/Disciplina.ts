import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("disciplina")
class Disciplina{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    id_solicitacao: number

    @Column()
    disciplina: string

    @Column()
    tipo_solicitacao: string

    @Column()
    professor: string
    
    @Column()
    data_atividade: string

    @CreateDateColumn()
    criado_em: Date
}

export { Disciplina }