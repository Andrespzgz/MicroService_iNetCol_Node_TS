import { Request, Response, Router } from "express";
import { MeasureController } from "../Controllers/Measure.Controllers";
import { IMeasureRouter } from "./Interfaces/IMeasureRoute.Interfaces";


// interface IMeasureRouter{
//     _measureController : IMeasureController
//     GetMeasureRouter:any
// }

export class MeasureRouter implements IMeasureRouter{

    readonly _measureController : IMeasureController
    constructor() {
        this._measureController = new MeasureController();
    }


    public GetMeasureRouter():Router{
        const router = Router();
        return router.get('/', this._measureController.GetMeasure())
    }
}