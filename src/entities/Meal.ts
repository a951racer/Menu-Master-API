import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable, AfterLoad} from "typeorm";
import { Mealslot } from './Mealslot';


@Entity()
export class Meal {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order: number;

    @Column()
    name: string;


    @OneToMany(type => Mealslot, mealslot => mealslot.meal)
    mealslotList: Mealslot[];

}
