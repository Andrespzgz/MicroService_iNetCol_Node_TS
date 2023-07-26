"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DBConnection_Data_1 = require("../Data/DBConnection.Data");
const iTransMeasure = DBConnection_Data_1.DataBase.Connection.define('ReadingData', {
    ReadingData_Id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false
    },
    EquipmentNumber: {
        type: sequelize_1.DataTypes.NUMBER,
        field: 'EquipNumber'
    },
    SensorType: {
        type: sequelize_1.DataTypes.STRING,
        //require : true
    },
    Measure: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Measurement'
    },
    GasType: {
        type: sequelize_1.DataTypes.STRING,
        //require : true
    },
    InstrumentMode: {
        type: sequelize_1.DataTypes.STRING,
        //require : true
    },
    BitsEstado: {
        type: sequelize_1.DataTypes.STRING,
        //require : true
    },
    LastAlarmMMDD: {
        type: sequelize_1.DataTypes.STRING,
        // require : true,
        field: 'LastDateAlarmMMDD'
    },
    LastAlarmYYYY: {
        type: sequelize_1.DataTypes.STRING,
        //require : true,
        field: 'LastDateAlarmYYYY'
    },
    RTCMD: {
        type: sequelize_1.DataTypes.STRING,
        //require : true,
        field: 'RTC_MMDD'
    },
    RTCY: {
        type: sequelize_1.DataTypes.STRING,
        //require : true,
        field: 'RTC_YYYY'
    },
    RTC_Time: {
        type: sequelize_1.DataTypes.STRING,
        //require : true,
    },
    LowAlarm: {
        type: sequelize_1.DataTypes.STRING,
        //require : true,
    },
    HighAlarm: {
        type: sequelize_1.DataTypes.STRING,
        //require : true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        field: 'RegistrationDate'
    },
    /*createdAt: {
        type: DataTypes.DATE,
        field: 'RegistrationDate',
    },*/
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
});
iTransMeasure.removeAttribute('updatedAt');
exports.default = iTransMeasure;
//# sourceMappingURL=measure.Models.js.map