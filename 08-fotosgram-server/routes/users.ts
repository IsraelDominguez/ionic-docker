import {Router, Request, Response} from "express";
import {User} from "../models/user.model";


const userRoutes = Router();

userRoutes.get('/test', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'All is ok'
    })
});

userRoutes.post('/create', (req: Request, res: Response) => {

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    User.create(user).then(userDB => {
        res.json({
            ok: true,
            user: userDB
        });
    }).catch( error => {
        res.json({
            error: true,
            message: error.codeName
        })
    });


});

export default userRoutes;