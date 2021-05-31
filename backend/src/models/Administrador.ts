import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("administrador")
class Administrador{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nome: string
    
    @Column()
    usuario: string

    @Column()
    senha: string
    
    @CreateDateColumn()
    criado_em: Date
}

export { Administrador }