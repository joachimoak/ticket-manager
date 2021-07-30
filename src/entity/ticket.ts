import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user";
// import { Comment } from "./comment";

// status type
type statusType = 'todo' | 'wip' | 'done';

@Entity({ name: "ticket" })
export class Ticket {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column()
    status!: statusType;

    @Column({ default: () => "NOW()" })
    createDate!: Date;

    @Column({ default: () => "NOW()" })
    updateDate!: Date;

    @ManyToOne(() => User, user => user.tickets) // opted to keep tickets even their owners are deleted
    user!: User;

    // @OneToMany(() => Comment, comment => comment.ticket)
    // comments!: Comment[];
}
