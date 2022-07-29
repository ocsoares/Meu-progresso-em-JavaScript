import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('cpf')
export class CPF{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', nullable: false})
    name: string

    @Column({nullable: false})
    cpf: number
}