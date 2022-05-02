import express, { Request, Response, NextFunction } from 'express';
import bodyParser, { BodyParser  } from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

import connection from './core/config/db';
connection();

// api endpoits
import * as Business from './core/business';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) =>{
    res.send('Welcome');
});

// API endpoint

app.get('/api/business', (req: Request, res: Response) => Business.default.get(res));

app.post('/api/business', (req: Request, res: Response) => Business.default.post(req, res))

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});