import { NextFunction, Request, Response } from 'express';

export const getBookHandler = (req: Request, res: Response, next: NextFunction) => {
    return res.send(req.params);
};
