import { Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default async function readRecords(req: Request, res: Response) {
    axios({
        method: 'GET',
        url: `https://directus.ermler.dev/items/wine/`,
    })
        .then(function (response) {
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            res.status(500).send(error);
        });
}
