import {MigrationInterface, QueryRunner} from "typeorm";

export class FixFirstNameInUser1627720846170 implements MigrationInterface {
    name = 'FixFirstNameInUser1627720846170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ticket_manager`.`user` CHANGE `firtName` `firstName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `ticket_manager`.`user` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `ticket_manager`.`user` ADD `firstName` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ticket_manager`.`user` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `ticket_manager`.`user` ADD `firstName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `ticket_manager`.`user` CHANGE `firstName` `firtName` varchar(255) NOT NULL");
    }

}
