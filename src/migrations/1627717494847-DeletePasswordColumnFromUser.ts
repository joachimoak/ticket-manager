import {MigrationInterface, QueryRunner} from "typeorm";

export class DeletePasswordColumnFromUser1627717494847 implements MigrationInterface {
    name = 'DeletePasswordColumnFromUser1627717494847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ticket_manager`.`user` DROP COLUMN `password`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ticket_manager`.`user` ADD `password` varchar(255) NOT NULL");
    }

}
