import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'character varying', default: ''})
    title: string

    @Column()
    userId: number

    @Column()
    chatId: number

    @UpdateDateColumn()
    createdAt: Date
}
