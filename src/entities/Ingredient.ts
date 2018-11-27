import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable, AfterLoad} from "typeorm";
import { Recipe } from './Recipe';
import { Shoppinglist } from './Shoppinglist';


@Entity()
export class Ingredient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;


    @ManyToMany(type => Recipe, recipe => recipe.ingredientList)
    @JoinTable()
    recipeList: Recipe[];

    @ManyToMany(type => Shoppinglist, shoppinglist => shoppinglist.ingredientList)
    shoppinglistList: Shoppinglist[];

}
