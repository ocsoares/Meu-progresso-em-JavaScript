import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659109913477 implements MigrationInterface {
    name = 'default1659109913477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" ADD "cep" numeric`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "cep"`);
    }

}
