import {Router, Request, Response} from "express";


const userRoutes = Router();

userRoutes.get('/test', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'All is ok'
    })
});

export default userRoutes;