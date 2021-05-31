import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSolicitacao1622401374186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "solicitacao",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true 
                    },
                    {
                        name: "justificativa",
                        type: "longtext",
                    },
                    {
                        name: "status",
                        type: "varchar",
                    },
                    {
                        name: "data_solicitacao",
                        type: "timestamp",
                        default: "now()"
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
        await queryRunner.dropTable("solicitacao")
    }

}
