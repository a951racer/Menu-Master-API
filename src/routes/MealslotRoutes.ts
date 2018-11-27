import {MealslotController} from "../controllers/MealslotController";

export const MealslotRoutes = [{
    method: "get",
    route: "/api/mealslot",
    controller: MealslotController,
    action: "all"
}, {
    method: "get",
    route: "/api/mealslot/:id",
    controller: MealslotController,
    action: "one"
}, {
    method: "post",
    route: "/api/mealslot",
    controller: MealslotController,
    action: "save"
}, {
    method: "put",
    route: "/api/mealslot/:id",
    controller: MealslotController,
    action: "update"
}, {
    method: "delete",
    route: "/api/mealslot/:id",
    controller: MealslotController,
    action: "remove"
}];