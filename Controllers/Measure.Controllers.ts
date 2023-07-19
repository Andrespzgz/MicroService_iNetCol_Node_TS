import { Request, Response } from "express"

export class MeasureController implements IMeasureController{
    constructor() {
        
    }
    public GetMeasure():any{
        return (req : Request, res: Response)=>{
            res.json({msg: "Get Method is working!!"})
        }
    }
}