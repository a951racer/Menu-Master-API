import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Recipe} from "../entities/Recipe"

export class RecipeController {

    private recipeRepository = getRepository(Recipe);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.recipeRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.recipeRepository.findOne(request.params.id, { relations: ["mealslotList", "ingredientList", ] });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.recipeRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const results = this.recipeRepository.update(request.params.id, request.body);
        const recipe = this.one(request, response, function(){});
        return recipe;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.recipeRepository.delete(request.params.id);
    }
}