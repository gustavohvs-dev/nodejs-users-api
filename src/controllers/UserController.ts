import { Request, Response } from "express";
import User from "../models/User";

class UserController
{
    async selectAll(req: Request, res: Response)
    {
        let users = await User.selectAll()
        res.status(200)
        res.json(users)
    }

    async selectById(req: Request, res: Response)
    {
        let id = parseInt(req.params.id)
        let user = await User.selectById(id)
        console.log(user)
        if(user == false){
            res.status(404)
            res.json({status: 0, err: "Usuário não encontrado"})
        }else{
            res.status(200)
            res.json({status: 1, info: "Usuário encontrado", user: user})
        }
    }

    async create(req: Request, res: Response)
    {
        var {email, name, password} = req.body
        if(email == undefined || name == undefined || password == undefined){
            res.status(400)
            res.json({status: 0, err: "Preencha todos os campos necessários"})
            return
        }
        var emailExists = await User.findEmail(email);
        if(emailExists){
            res.status(406)
            res.json({status: 0, err: "Este email já está cadastrado"})
            return
        }
        await User.create(name, email, password)
        res.status(200)
        res.json({status: 1, info: "Usuário cadastrado"})
    }

    async update(req: Request, res: Response)
    {

    }

    async delete(req: Request, res: Response)
    {

    }

}

export default new UserController