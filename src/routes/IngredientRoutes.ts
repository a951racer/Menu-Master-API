import {IngredientController} from "../controllers/IngredientController";

export const IngredientRoutes = [{
    method: "get",
    route: "/api/ingredient",
    controller: IngredientController,
    action: "all"
}, {
    method: "get",
    route: "/api/ingredient/:id",
    controller: IngredientController,
    action: "one"
}, {
    method: "post",
    route: "/api/ingredient",
    controller: IngredientController,
    action: "save"
}, {
    method: "put",
    route: "/api/ingredient/:id",
    controller: IngredientController,
    action: "update"
}, {
    method: "delete",
    route: "/api/ingredient/:id",
    controller: IngredientController,
    action: "remove"
}];