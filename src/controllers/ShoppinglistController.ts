import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Shoppinglist} from "../entities/Shoppinglist"

export class ShoppinglistController {

    private shoppinglistRepository = getRepository(Shoppinglist);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.shoppinglistRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.shoppinglistRepository.findOne(request.params.id, { relations: ["ingredientList", ] });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.shoppinglistRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const results = this.shoppinglistRepository.update(request.params.id, request.body);
        const shoppinglist = this.one(request, response, function(){});
        return shoppinglist;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.shoppinglistRepository.delete(request.params.id);
    }
}