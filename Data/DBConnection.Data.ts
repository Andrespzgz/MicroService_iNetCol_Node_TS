
import { Sequelize }  from 'sequelize';

export class DataBase{

    //TODO: handler variables
    static Connection = new Sequelize('DataMeasurement','sa','Admin123.',{
        host: 'localhost',
        dialect: 'mssql', 
        logging: true
    });
}
