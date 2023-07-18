"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Measure = void 0;
const express_1 = require("express");
class Measure {
    /**
     *
     */
    constructor() {
    }
    GetMeasure() {
        const router = (0, express_1.Router)();
        return router.get('/', (req, res) => {
            res.json({ msg: "Get Method is working" });
        });
    }
}
exports.Measure = Measure;
//# sourceMappingURL=Measure.Routers.js.map