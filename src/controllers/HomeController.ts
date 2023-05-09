import { Request, Response } from "express"

class HomeController{

    async index(req: Request, res: Response){
        res.json({status: 1, info: "Servidor funcionando corretamente"})
    }

}

export default new HomeController()