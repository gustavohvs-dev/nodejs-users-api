import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config/config"

class AuthController
{

    async login(req: Request, res: Response)
    {
        var {email, password} = req.body;
        var user = await User.selectByEmail(email)
        if(user == undefined || password == undefined){
            res.status(404)
            res.json({status: 0, info: "Usuário não encontrado"})
            return
        }else{
            await bcrypt.compare(password, user.password, function(err, result){
                console.log(err)
                if(result == false || err != undefined){
                    res.status(406)
                    res.json({status: 0, info: "Senha incorreta"})
                    return
                }else{
                    var token = jwt.sign({email: email}, config.JWTSecret, {expiresIn: '48h'})
                    res.status(200)
                    res.json({status: 1, info: "Usuário logado com sucesso", token})
                    return
                }
            })
        }
    }
}

export default new AuthController