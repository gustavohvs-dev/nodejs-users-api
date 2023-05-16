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
class UserController {
    selectAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield User_1.default.selectAll();
            res.status(200);
            res.json(users);
        });
    }
    selectById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = parseInt(req.params.id);
            let user = yield User_1.default.selectById(id);
            console.log(user);
            if (user == false) {
                res.status(404);
                res.json({ status: 0, err: "Usuário não encontrado" });
            }
            else {
                res.status(200);
                res.json({ status: 1, info: "Usuário encontrado", user: user });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var { email, name, password } = req.body;
            if (email == undefined || name == undefined || password == undefined) {
                res.status(400);
                res.json({ status: 0, err: "Preencha todos os campos necessários" });
                return;
            }
            var emailExists = yield User_1.default.findEmail(email);
            if (emailExists) {
                res.status(406);
                res.json({ status: 0, err: "Este email já está cadastrado" });
                return;
            }
            yield User_1.default.create(name, email, password);
            res.status(200);
            res.json({ status: 1, info: "Usuário cadastrado" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = new UserController;
