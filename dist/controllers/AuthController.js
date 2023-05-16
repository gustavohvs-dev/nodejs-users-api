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
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../config/config");
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var { email, password } = req.body;
            var user = yield User_1.default.selectByEmail(email);
            if (user == undefined || password == undefined) {
                res.status(404);
                res.json({ status: 0, info: "Usuário não encontrado" });
                return;
            }
            else {
                yield bcrypt_1.default.compare(password, user.password, function (err, result) {
                    console.log(err);
                    if (result == false || err != undefined) {
                        res.status(406);
                        res.json({ status: 0, info: "Senha incorreta" });
                        return;
                    }
                    else {
                        var token = jsonwebtoken_1.default.sign({ email: email }, config_1.JWTSecret, { expiresIn: '48h' });
                        res.status(200);
                        res.json({ status: 1, info: "Usuário logado com sucesso", token });
                        return;
                    }
                });
            }
        });
    }
}
exports.default = new AuthController;
