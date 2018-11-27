import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Mealslot} from "../entities/Mealslot"

export class MealslotController {

    private mealslotRepository = getRepository(Mealslot);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.mealslotRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.mealslotRepository.findOne(request.params.id, { relations: ["recipeList", "meal", "day"] });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.mealslotRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const results = this.mealslotRepository.update(request.params.id, request.body);
        const mealslot = this.one(request, response, function(){});
        return mealslot;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.mealslotRepository.delete(request.params.id);
    }
}