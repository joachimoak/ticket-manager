import {MigrationInterface, QueryRunner} from "typeorm";

export class CommentTableCreation1627666769575 implements MigrationInterface {
    name = 'CommentTableCreation1627666769575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `ticket_manager`.`comment` (`id` int NOT NULL AUTO_INCREMENT, `content` varchar(255) NOT NULL, `createDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, `updateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `ticket_manager`.`comment`");
    }

}
