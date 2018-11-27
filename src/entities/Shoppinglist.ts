import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable, AfterLoad} from "typeorm";
import { Ingredient } from './Ingredient';


@Entity()
export class Shoppinglist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    comment: string;


    @ManyToMany(type => Ingredient, ingredient => ingredient.shoppinglistList)
    @JoinTable()
    ingredientList: Ingredient[];

}
