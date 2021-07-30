import {MigrationInterface, QueryRunner} from "typeorm";

export class TicketOneToManyComment1627667398848 implements MigrationInterface {
    name = 'TicketOneToManyComment1627667398848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ticket_manager`.`comment` ADD `ticketId` int NULL");
        await queryRunner.query("ALTER TABLE `ticket_manager`.`comment` ADD CONSTRAINT `FK_7522f1f6b36fa4b1742762a17f9` FOREIGN KEY (`ticketId`) REFERENCES `ticket_manager`.`ticket`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ticket_manager`.`comment` DROP FOREIGN KEY `FK_7522f1f6b36fa4b1742762a17f9`");
        await queryRunner.query("ALTER TABLE `ticket_manager`.`comment` DROP COLUMN `ticketId`");
    }

}
