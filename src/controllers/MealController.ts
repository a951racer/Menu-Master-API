import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Meal} from "../entities/Meal"

export class MealController {

    private mealRepository = getRepository(Meal);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.mealRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.mealRepository.findOne(request.params.id, { relations: ["mealslotList", ] });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.mealRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const results = this.mealRepository.update(request.params.id, request.body);
        const meal = this.one(request, response, function(){});
        return meal;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.mealRepository.delete(request.params.id);
    }
}