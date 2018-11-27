import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable, AfterLoad} from "typeorm";
import { Day } from './Day';
import { Meal } from './Meal';
import { Recipe } from './Recipe';


@Entity()
export class Mealslot {

    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(type => Day, day => day.mealslotList)
    day: Day;

    @ManyToOne(type => Meal, meal => meal.mealslotList)
    meal: Meal;

    @ManyToMany(type => Recipe, recipe => recipe.mealslotList)
    recipeList: Recipe[];

}
