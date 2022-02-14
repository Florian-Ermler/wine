import { NextFunction, Request, Response } from 'express';

export interface ExpressRoute {
    path: string;
    method: 'get' | 'post' | 'put' | 'delete';
    action: (req: Request, res: Response) => any;
    middleware?: (req: Request, res: Response, next: NextFunction) => any;
}
