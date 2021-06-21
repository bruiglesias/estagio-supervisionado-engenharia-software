import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("curso")
class Curso{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nome: string
    
    @CreateDateColumn()
    criado_em: Date
}

export { Curso }