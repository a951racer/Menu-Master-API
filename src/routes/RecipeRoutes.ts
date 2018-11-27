import {RecipeController} from "../controllers/RecipeController";

export const RecipeRoutes = [{
    method: "get",
    route: "/api/recipe",
    controller: RecipeController,
    action: "all"
}, {
    method: "get",
    route: "/api/recipe/:id",
    controller: RecipeController,
    action: "one"
}, {
    method: "post",
    route: "/api/recipe",
    controller: RecipeController,
    action: "save"
}, {
    method: "put",
    route: "/api/recipe/:id",
    controller: RecipeController,
    action: "update"
}, {
    method: "delete",
    route: "/api/recipe/:id",
    controller: RecipeController,
    action: "remove"
}];