import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("coordenador")
class Coordenador{
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

export { Coordenador }