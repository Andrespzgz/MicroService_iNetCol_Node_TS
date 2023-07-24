
import { Sequelize }  from 'sequelize';

const dbConnection = new Sequelize('DataMeasurement','sa','Admin123',{
    host: 'localhost',
    dialect: 'mssql', 
    logging: true
});


export default dbConnection