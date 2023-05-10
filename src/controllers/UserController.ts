import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

var JWTSecret = "SWLm;UYX'K-yna}+_Z"

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

    async login(req: Request, res: Response)
    {
        var {email, password} = req.body;
        var user = await User.selectByEmail(email)
        if(user == undefined || password == undefined){
            res.status(404)
            res.json({status: 0, info: "Usuário não encontrado"})
            return
        }else{
            console.log(password + "----" + user.password)
            await bcrypt.compare(password, user.password, function(err, result){
                console.log(err)
                if(result == false || err != undefined){
                    res.status(406)
                    res.json({status: 0, info: "Senha incorreta"})
                    return
                }else{
                    var token = jwt.sign({email: email}, JWTSecret, {expiresIn: '48h'})
                    res.status(200)
                    res.json({status: 1, info: "Usuário logado com sucesso", token})
                    return
                }
            })
        }
    }
}

export default new UserController