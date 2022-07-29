import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659043854898 implements MigrationInterface {
    name = 'default1659043854898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cpf" ("id" SERIAL NOT NULL, "name" text NOT NULL, "cpf" integer NOT NULL, CONSTRAINT "PK_683bfefdbebca44f523f024c929" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accounts" ("id" SERIAL NOT NULL, "username" text NOT NULL, "email" text NOT NULL, "password" character varying NOT NULL, "cpf_id" integer, CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_0d2d9952b5608ee5fe25fdfbff1" FOREIGN KEY ("cpf_id") REFERENCES "cpf"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_0d2d9952b5608ee5fe25fdfbff1"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
        await queryRunner.query(`DROP TABLE "cpf"`);
    }

}
