
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {  MeasureRouter } from '../Routers/Measure.Routers';
import { IMeasureRouter } from '../Routers/Interfaces/IMeasureRoute.Interfaces';
import { DataBase } from '../Data/DBConnection.Data';
dotenv.config();


class Server {
    readonly _measureRouter : IMeasureRouter
    private app: Application;
    private port: string;
    private apiPaths = {
        measurements : '/api/measure'
    }

    constructor()
    {
        this.app = express();
        this.port = process.env.PORT || '8090';

        //Call clases
        this._measureRouter  = new MeasureRouter();       
        // call middewares

        this.conectarBD();

        this.middlewares();
        //Define my routes
        this.routers();

    }

    async conectarBD()
    {
        try
        {
            await DataBase.Connection.authenticate();
            console.log('Database online');
        }catch(error)
        {
            // throw new Error( 'error' );
            console.error('Unable to connect to the database:',error);
        }
    }

    middlewares(){
        
        //Conf CORS
        this.app.use( cors() );

        //Parsear JSON
        this.app.use( express.json() );

        //public folder

        this.app.use( express.static( 'public' ));
    }

    //TODO: Database configuration
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server running on port '+ this.port);
        })
    }

    routers(){

        this.app.use(this.apiPaths.measurements, this._measureRouter.GetMeasureRouter())
    }
}

export default Server;