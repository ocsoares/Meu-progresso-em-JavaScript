import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658322694474 implements MigrationInterface {
    name = 'default1658322694474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "UQ_b3024212b848c9b483e3e6a1a91" UNIQUE ("cpf")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "UQ_b3024212b848c9b483e3e6a1a91"`);
    }

}
