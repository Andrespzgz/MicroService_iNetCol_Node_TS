"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureController = void 0;
class MeasureController {
    constructor() {
    }
    GetMeasure() {
        return (req, res) => {
            res.json({ msg: "Get Method is working!!" });
        };
    }
}
exports.MeasureController = MeasureController;
//# sourceMappingURL=Measure.Controllers.js.map