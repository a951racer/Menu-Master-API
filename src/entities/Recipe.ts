import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable, AfterLoad} from "typeorm";
import { Mealslot } from './Mealslot';
import { Ingredient } from './Ingredient';


@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    comment: string;


    @ManyToMany(type => Mealslot, mealslot => mealslot.recipeList)
    @JoinTable()
    mealslotList: Mealslot[];

    @ManyToMany(type => Ingredient, ingredient => ingredient.recipeList)
    ingredientList: Ingredient[];

}
