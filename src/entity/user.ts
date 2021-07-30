import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
// import { Ticket } from "./ticket";
// import { Comment } from "./comment";

console.log("Voici le schema du USER")

@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firtName!: string;

    @Column()
    lastName!: string;

    @Column()
    username!: string;

    @Column({ unique: true })
    email!: string;

    @Column({ select: false })
    password!: string;

    // @OneToMany(() => Ticket, ticket => ticket.user)
    // tickets!: Ticket[];

    // @OneToMany(() => Comment, comment => comment.ticket)
    // comments!: Comment[];
}
