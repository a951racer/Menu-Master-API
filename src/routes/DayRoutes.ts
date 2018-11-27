import {DayController} from "../controllers/DayController";

export const DayRoutes = [{
    method: "get",
    route: "/api/day",
    controller: DayController,
    action: "all"
}, {
    method: "get",
    route: "/api/day/:id",
    controller: DayController,
    action: "one"
}, {
    method: "post",
    route: "/api/day",
    controller: DayController,
    action: "save"
}, {
    method: "put",
    route: "/api/day/:id",
    controller: DayController,
    action: "update"
}, {
    method: "delete",
    route: "/api/day/:id",
    controller: DayController,
    action: "remove"
}];