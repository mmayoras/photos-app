import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
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
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(`======= ENV: ${this.env} =======`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`=================================`);
    });

    this.app.get('/', (req: Request, res: Response) => {
      res.send('Express + TypeScript Server. Marques here, wad up?');
    });
  }

  public getServer() {
    return this.app;
  }
}

export default App;
