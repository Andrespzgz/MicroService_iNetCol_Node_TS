import { DataTypes } from 'sequelize';
import { DataBase } from '../Data/DBConnection.Data';

const iTransMeasure = DataBase.Connection.define('ReadingData', {
    ReadingData_Id:{
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false
    },
    EquipmentNumber:{
        type: DataTypes.NUMBER,
        field : 'EquipNumber'
    },
    SensorType:{
        type:DataTypes.STRING,
        //require : true
    },
    Measure:{
        type: DataTypes.STRING,
        field:'Measurement'
    },
    GasType:{
        type:DataTypes.STRING,
        //require : true
    },
    InstrumentMode:{
        type:DataTypes.STRING,
        //require : true
    },
    BitsEstado:{
        type:DataTypes.STRING,
        //require : true
    },
    LastAlarmMMDD:{
        type:DataTypes.STRING,
       // require : true,
        field: 'LastDateAlarmMMDD'
    },
    LastAlarmYYYY:{
        type:DataTypes.STRING,
        //require : true,
        field: 'LastDateAlarmYYYY'
    },
    RTCMD:{
        type:DataTypes.STRING,
        //require : true,
        field: 'RTC_MMDD'
    },
    RTCY:{
        type:DataTypes.STRING,
        //require : true,
        field: 'RTC_YYYY'
    },
    RTC_Time:{
        type:DataTypes.STRING,
        //require : true,
    },
    LowAlarm:{
        type:DataTypes.STRING,
        //require : true,
    },
    HighAlarm:{
        type:DataTypes.STRING,
        //require : true,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'RegistrationDate'
    },
    /*createdAt: {
        type: DataTypes.DATE,
        field: 'RegistrationDate',
    },*/
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false        
    }    
});
iTransMeasure.removeAttribute('updatedAt');

export default  iTransMeasure;
