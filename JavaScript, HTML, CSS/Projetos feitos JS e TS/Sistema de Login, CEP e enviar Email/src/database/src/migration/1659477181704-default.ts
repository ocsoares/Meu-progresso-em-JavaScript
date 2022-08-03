import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659477181704 implements MigrationInterface {
    name = 'default1659477181704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cpf" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "cpf" ADD "cpf" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cpf" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "cpf" ADD "cpf" integer NOT NULL`);
    }

}
