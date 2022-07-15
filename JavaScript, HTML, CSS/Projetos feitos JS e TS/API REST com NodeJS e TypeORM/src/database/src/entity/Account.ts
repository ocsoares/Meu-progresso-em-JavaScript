import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bank } from "./Bank";

@Entity('accounts')
export class Account{
    @PrimaryGeneratedColumn()
    id: number

                        // nullable = Permite ou Não esse campo ser Nulo !
    @Column({type: 'text', nullable: false})
    person_name: string

    @Column({type: 'text', nullable: false})
    cpf: number

    // Chave Estrangeira (FK) que vai se Relacionar com o Bank !

    // Relacionamento de MUITOS para UM, no caso, Várias Accounts para UM Bank !! <<
    // (() => Entidade a ser usada como UM, Entidade UM => Entidade UM.alguma Propriedade (Isso serve para quando é o INVERSO, UM chamando MUITOS !!) )
    @ManyToOne(() => Bank, bank => bank.accounts)
    @JoinColumn({name: 'bank_id'}) // Nome da Chave Estrangeira !! Se não por, ele Gera alguma Automaticamente !
    bank: Bank // Atribui a bank_id o Objeto de Bank !!
}