import {MigrationInterface, QueryRunner} from "typeorm";

export class UserOneToManyComment1627667567532 implements MigrationInterface {
    name = 'UserOneToManyComment1627667567532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ticket_manager`.`comment` ADD `userId` int NULL");
        await queryRunner.query("ALTER TABLE `ticket_manager`.`comment` ADD CONSTRAINT `FK_c0354a9a009d3bb45a08655ce3b` FOREIGN KEY (`userId`) REFERENCES `ticket_manager`.`user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ticket_manager`.`comment` DROP FOREIGN KEY `FK_c0354a9a009d3bb45a08655ce3b`");
        await queryRunner.query("ALTER TABLE `ticket_manager`.`comment` DROP COLUMN `userId`");
    }

}
