import {ShoppinglistController} from "../controllers/ShoppinglistController";

export const ShoppinglistRoutes = [{
    method: "get",
    route: "/api/shoppinglist",
    controller: ShoppinglistController,
    action: "all"
}, {
    method: "get",
    route: "/api/shoppinglist/:id",
    controller: ShoppinglistController,
    action: "one"
}, {
    method: "post",
    route: "/api/shoppinglist",
    controller: ShoppinglistController,
    action: "save"
}, {
    method: "put",
    route: "/api/shoppinglist/:id",
    controller: ShoppinglistController,
    action: "update"
}, {
    method: "delete",
    route: "/api/shoppinglist/:id",
    controller: ShoppinglistController,
    action: "remove"
}];