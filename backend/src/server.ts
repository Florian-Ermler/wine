import express, { Request, Response, NextFunction, Router } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { MainRoutes } from './api/main.routes';

const app = express();
const router = Router();

dotenv.config();

const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MainRoutes.forEach(route => {
    router[route.method](route.path, (request: Request, response: Response, next: NextFunction) => {
        route.action(request, response);
    });
});

app.use('/api', router);
app.get('*', (req, res) => {
    return res.status(500).send('Route does not exist');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
