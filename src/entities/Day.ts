import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable, AfterLoad} from "typeorm";
import { Mealslot } from './Mealslot';


@Entity()
export class Day {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    comment: string;


    @OneToMany(type => Mealslot, mealslot => mealslot.day)
    mealslotList: Mealslot[];

}
