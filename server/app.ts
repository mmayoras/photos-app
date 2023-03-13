import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { Routes } from './interfaces/routes.interface';

class App {
  public app: Express;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = 'development';
    this.port = 3001;
 
    dotenv.config();

    this.app.use(cors({ origin: '*', credentials: true }));

    this.initializeRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(`======= ENV: ${this.env} =======`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`=================================`);
    });

    this.app.get('/', (req: Request, res: Response) => {
      res.send('Express + TypeScript Server.');
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }
}

export default App;
