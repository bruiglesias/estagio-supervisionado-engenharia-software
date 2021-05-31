import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("anexo")
class Anexo{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    caminho: string
    
    @CreateDateColumn()
    criado_em: Date
}

export { Anexo }