import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDisciplina1622401395641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "disciplina",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true 
                    },
                    {
                        name: "disciplina",
                        type: "varchar",
                    },
                    {
                        name: "tipo_solicitacao",
                        type: "varchar",
                    },
                    {
                        name: "professor",
                        type: "varchar",
                    },
                    {
                        name: "data_atividade",
                        type: "timestamp",
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("disciplina")
    }

}
