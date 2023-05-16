"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
class Auth {
    auth(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const authToken = req.headers['authorization'];
            if (authToken == undefined) {
                res.status(401);
                res.json({ err: "Token inválido" });
            }
            else {
                const bearer = authToken.split(' ');
                var token = bearer[1];
                jsonwebtoken_1.default.verify(token, config_1.JWTSecret, (err, data) => {
                    if (err) {
                        res.status(401);
                        res.json({ status: 0, err: "Token inválido" });
                    }
                    else {
                        //req.token = token;
                        //req.loggedUser = {id: data.id, email: data.email};
                        next();
                    }
                });
            }
        });
    }
}
exports.default = new Auth;
