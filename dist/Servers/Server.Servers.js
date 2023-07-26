"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const Measure_Routers_1 = require("../Routers/Measure.Routers");
const DBConnection_Data_1 = require("../Data/DBConnection.Data");
dotenv_1.default.config();
class Server {
    constructor() {
        this.apiPaths = {
            measurements: '/api/measure'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8090';
        //Call clases
        this._measureRouter = new Measure_Routers_1.MeasureRouter();
        // call middewares
        this.conectarBD();
        this.middlewares();
        //Define my routes
        this.routers();
    }
    conectarBD() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield DBConnection_Data_1.DataBase.Connection.authenticate();
                console.log('Database online');
            }
            catch (error) {
                // throw new Error( 'error' );
                console.error('Unable to connect to the database:', error);
            }
        });
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
        this.app.use(this.apiPaths.measurements, this._measureRouter.GetMeasureRouter());
    }
}
exports.default = Server;
//# sourceMappingURL=Server.Servers.js.map