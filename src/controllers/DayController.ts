import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Day} from "../entities/Day"

export class DayController {

    private dayRepository = getRepository(Day);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.dayRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.dayRepository.findOne(request.params.id, { relations: ["mealslotList"] });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.dayRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const results = this.dayRepository.update(request.params.id, request.body);
        const day = this.one(request, response, function(){});
        return day;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.dayRepository.delete(request.params.id);
    }
}