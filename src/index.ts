import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import * as cors from "cors";

import {DayRoutes} from "./routes/DayRoutes";
import {MealslotRoutes} from "./routes/MealslotRoutes";
import {MealRoutes} from "./routes/MealRoutes";
import {RecipeRoutes} from "./routes/RecipeRoutes";
import {IngredientRoutes} from "./routes/IngredientRoutes";
import {ShoppinglistRoutes} from "./routes/ShoppinglistRoutes";

import {Day} from "./entities/Day";
import {Mealslot} from "./entities/Mealslot";
import {Meal} from "./entities/Meal";
import {Recipe} from "./entities/Recipe";
import {Ingredient} from "./entities/Ingredient";
import {Shoppinglist} from "./entities/Shoppinglist";


createConnection().then(async connection => {

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    // register express routes from defined application routes
    DayRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    MealslotRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    MealRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    RecipeRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    IngredientRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    ShoppinglistRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });


    app.listen(3000);

    console.log("Express server has started on port 3000.");

}).catch(error => console.log(error));
