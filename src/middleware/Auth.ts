import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config"

class Auth
{
    async auth(req: Request, res: Response, next: NextFunction){
        const authToken = req.headers['authorization'];
        if(authToken == undefined){
            res.status(401);
            res.json({err: "Token inválido"})
        }else{
            const bearer = authToken.split(' ');
            var token = bearer[1];
            jwt.verify(token, config.JWTSecret, (err, data) => {
                if(err){
                    res.status(401);
                    res.json({status:0, err: "Token inválido"});
                }else{
                    //req.token = token;
                    //req.loggedUser = {id: data.id, email: data.email};
                    next();
                }
            });
        }
        
    }
}

export default new Auth