import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRecurso1622401405732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "recurso",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true 
                    },
                    {
                        name: "id_solicitacao",
                        type: "integer",
                    },
                    {
                        name: "justificativa",
                        type: "longtext",
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys:[
                    {
                        name: "FKSolicitacao",
                        referencedTableName: "solicitacao",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_solicitacao"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("recurso")
    }

}
