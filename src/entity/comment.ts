import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
// import { Ticket } from "./ticket";
// import { User } from "./user"

@Entity({ name: "comment" })
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @Column({ default: () => "NOW()" })
    createDate!: Date;

    @Column({ default: () => "NOW()" })
    updateDate!: Date;

    // @ManyToOne(() => Ticket, ticket => ticket.comments, { onDelete: 'CASCADE' })
    // ticket!: Ticket;

    // @ManyToOne(() => User, user => user.comments) // opted to keep deleted users comments
    // user!: User;
}
