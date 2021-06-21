import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity("coordenador")
class Coordenador{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    id_curso: number

    @Column()
    nome: string
    
    @Column()
    usuario: string

    @Column()
    senha: string
    
    @CreateDateColumn()
    criado_em: Date

    @BeforeInsert()
    async generatePasswordHash(): Promise<void> {
      this.senha = await bcrypt.hashSync(this.senha, bcrypt.genSaltSync(10));
    }
}

export { Coordenador }