import {MigrationInterface, QueryRunner} from "typeorm";

export class UserOneToManyTicket1627667248988 implements MigrationInterface {
    name = 'UserOneToManyTicket1627667248988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ticket_manager`.`ticket` ADD `userId` int NULL");
        await queryRunner.query("ALTER TABLE `ticket_manager`.`ticket` ADD CONSTRAINT `FK_0e01a7c92f008418bad6bad5919` FOREIGN KEY (`userId`) REFERENCES `ticket_manager`.`user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ticket_manager`.`ticket` DROP FOREIGN KEY `FK_0e01a7c92f008418bad6bad5919`");
        await queryRunner.query("ALTER TABLE `ticket_manager`.`ticket` DROP COLUMN `userId`");
    }

}
