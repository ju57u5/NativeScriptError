import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm/browser";

export abstract class Test extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number;
}
