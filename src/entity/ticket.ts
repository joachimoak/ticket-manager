import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user";
import { Comment } from "./comment";

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

    @CreateDateColumn({ select: false, type: "timestamptz" })
    createDate!: Date;

    @UpdateDateColumn({ select: false, type: "timestamptz" })
    updateDate!: Date;

    @ManyToOne(() => User, user => user.tickets) // opted to keep tickets even their owners are deleted
    user!: User;

    @OneToMany(() => Comment, comment => comment.ticket)
    comments!: Comment[];
}
