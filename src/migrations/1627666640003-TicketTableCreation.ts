import {MigrationInterface, QueryRunner} from "typeorm";

export class TicketTableCreation1627666640003 implements MigrationInterface {
    name = 'TicketTableCreation1627666640003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `ticket_manager`.`ticket` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `status` varchar(255) NOT NULL, `createDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `ticket_manager`.`ticket`");
    }

}
