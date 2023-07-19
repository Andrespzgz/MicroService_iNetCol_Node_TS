"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureRouter = void 0;
const express_1 = require("express");
const Measure_Controllers_1 = require("../Controllers/Measure.Controllers");
// interface IMeasureRouter{
//     _measureController : IMeasureController
//     GetMeasureRouter:any
// }
class MeasureRouter {
    constructor() {
        this._measureController = new Measure_Controllers_1.MeasureController();
    }
    GetMeasureRouter() {
        const router = (0, express_1.Router)();
        return router.get('/', this._measureController.GetMeasure());
    }
}
exports.MeasureRouter = MeasureRouter;
//# sourceMappingURL=Measure.Routers.js.map