import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnexo1622401386967 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "anexo",
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
                        name: "id_recurso",
                        type: "integer",
                    },
                    {
                        name: "caminho",
                        type: "varchar",
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
                    },
                    {
                        name: "FKRecurso",
                        referencedTableName: "recurso",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_recurso"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("anexo")
    }

}
