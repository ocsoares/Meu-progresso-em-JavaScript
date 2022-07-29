import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659054154893 implements MigrationInterface {
    name = 'default1659054154893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_0d2d9952b5608ee5fe25fdfbff1"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "cpf_id"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "password" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "cpf_id" integer`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_0d2d9952b5608ee5fe25fdfbff1" FOREIGN KEY ("cpf_id") REFERENCES "cpf"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
