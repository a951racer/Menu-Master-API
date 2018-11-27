import {MealController} from "../controllers/MealController";

export const MealRoutes = [{
    method: "get",
    route: "/api/meal",
    controller: MealController,
    action: "all"
}, {
    method: "get",
    route: "/api/meal/:id",
    controller: MealController,
    action: "one"
}, {
    method: "post",
    route: "/api/meal",
    controller: MealController,
    action: "save"
}, {
    method: "put",
    route: "/api/meal/:id",
    controller: MealController,
    action: "update"
}, {
    method: "delete",
    route: "/api/meal/:id",
    controller: MealController,
    action: "remove"
}];