
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Measure } from '../Routers/Measure.Routers';
dotenv.config();


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users : '/api/measure'
    }

    constructor()
    {
        this.app = express();
        this.port = process.env.PORT || '8090';

        // call middewares

        this.middlewares();
        //Define my routes
        this.routers();

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

        this.app.use(this.apiPaths.users, new Measure().GetMeasure())
    }
}

export default Server;