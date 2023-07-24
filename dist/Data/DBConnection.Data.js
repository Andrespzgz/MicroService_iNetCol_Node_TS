"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection = new sequelize_1.Sequelize('DataMeasurement', 'sa', 'Admin123', {
    host: 'localhost',
    dialect: 'mssql',
    logging: true
});
exports.default = dbConnection;
//# sourceMappingURL=DBConnection.Data.js.map