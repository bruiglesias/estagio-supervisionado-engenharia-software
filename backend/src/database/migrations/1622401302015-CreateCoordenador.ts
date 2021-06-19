import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCoordenador1622401302015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "coordenador",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true 
                    },
                    {
                        name: "id_curso",
                        type: "integer",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "usuario",
                        type: "varchar"
                    },
                    {
                        name: "senha",
                        type: "varchar"
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys:[
                    {
                        name: "FKCurso",
                        referencedTableName: "curso",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_curso"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("coordenador")
    }

}
