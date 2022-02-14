import { Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default async function readRecord(req: Request, res: Response) {
    axios({
        method: 'GET',
        url: `https://directus.ermler.dev/items/wine/${req.params.id}`,
    })
        .then(function (response) {
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            res.status(500).send(error);
        });
}
