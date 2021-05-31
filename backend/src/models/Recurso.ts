import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("recurso")
class Recurso{
    @PrimaryGeneratedColumn('increment')
    id: number

    @CreateDateColumn()
    data_recurso: Date
    
    @CreateDateColumn()
    criado_em: Date
}

export { Recurso }