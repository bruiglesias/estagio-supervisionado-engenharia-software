import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("anexo")
class Anexo{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    id_solicitacao: number

    @Column()
    id_recurso: number

    @Column()
    caminho: string
    
    @CreateDateColumn()
    criado_em: Date
}

export { Anexo }