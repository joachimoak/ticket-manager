import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTableCreation1627666465649 implements MigrationInterface {
    name = 'UserTableCreation1627666465649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `ticket_manager`.`user` (`id` int NOT NULL AUTO_INCREMENT, `firtName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `ticket_manager`.`user`");
        await queryRunner.query("DROP TABLE `ticket_manager`.`user`");
    }

}
