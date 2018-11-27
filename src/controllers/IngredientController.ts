import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Ingredient} from "../entities/Ingredient"

export class IngredientController {

    private ingredientRepository = getRepository(Ingredient);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.ingredientRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.ingredientRepository.findOne(request.params.id, { relations: ["recipeList", "shoppinglistList", ] });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.ingredientRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const results = this.ingredientRepository.update(request.params.id, request.body);
        const ingredient = this.one(request, response, function(){});
        return ingredient;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.ingredientRepository.delete(request.params.id);
    }
}