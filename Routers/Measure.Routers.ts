import { Request, Response, Router } from "express";


export class Measure{
    /**
     *
     */
    constructor() {
        
    }


    public GetMeasure():Router{
        const router = Router();
        return router.get('/', (req : Request, res: Response)=>{
            res.json({msg: "Get Method is working"})
        })
    }
}