"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const sequelize_1 = require("sequelize");
class DataBase {
}
exports.DataBase = DataBase;
//TODO: handler variables
DataBase.Connection = new sequelize_1.Sequelize('DataMeasurement', 'sa', 'Admin123.', {
    host: 'localhost',
    dialect: 'mssql',
    logging: true
});
//# sourceMappingURL=DBConnection.Data.js.map