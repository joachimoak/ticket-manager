import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Ticket } from "./ticket";
import { User } from "./user"

@Entity({ name: "ticket" })
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @CreateDateColumn({ select: false, type: "timestamptz" })
    createDate!: Date;

    @UpdateDateColumn({ select: false, type: "timestamptz" })
    updateDate!: Date;

    @ManyToOne(() => Ticket, ticket => ticket.comments)
    ticket!: Ticket;

    @ManyToOne(() => User, user => user.comments)
    user!: User;
}
