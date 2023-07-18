"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const Measure_Routers_1 = require("../Routers/Measure.Routers");
dotenv_1.default.config();
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/measure'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8090';
        // call middewares
        this.middlewares();
        //Define my routes
        this.routers();
    }
    middlewares() {
        //Conf CORS
        this.app.use((0, cors_1.default)());
        //Parsear JSON
        this.app.use(express_1.default.json());
        //public folder
        this.app.use(express_1.default.static('public'));
    }
    //TODO: Database configuration
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ' + this.port);
        });
    }
    routers() {
        this.app.use(this.apiPaths.users, new Measure_Routers_1.Measure().GetMeasure());
    }
}
exports.default = Server;
//# sourceMappingURL=Server.Servers.js.map