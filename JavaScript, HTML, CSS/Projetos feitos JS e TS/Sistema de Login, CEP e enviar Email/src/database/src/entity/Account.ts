import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('accounts')
export class Account{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', nullable: false})
    username: string

    @Column({type: 'text', nullable: false})
    email: string

    @Column({type: 'numeric', nullable: true})
    cep: number

    @Column({type: 'text', nullable: false})
    password: string
}