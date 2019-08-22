import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm/browser";
import { Test } from "./test"

@Entity()
export default class Todo extends Test {

    @Column()
    task: string;

    @Column()
    done: boolean;

    constructor(task: string, done: boolean) {
        super();
        this.task = task;
        this.done = done;
    }

}
