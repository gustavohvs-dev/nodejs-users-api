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
const connection_1 = __importDefault(require("../database/connection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class User {
    selectAll() {
        return __awaiter(this, void 0, void 0, function* () {
            var users = yield connection_1.default.table("users").select('id', 'name', 'email', 'role', 'createdAt', 'updatedAt');
            return users;
        });
    }
    selectById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = yield connection_1.default.table("users").select('id', 'name', 'email', 'role', 'createdAt', 'updatedAt').where({ id: id });
            return user[0];
        });
    }
    create(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var hash = yield bcrypt_1.default.hash(password, 10);
                yield connection_1.default.insert({ email, password: hash, name, role: 0 }).table("users");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(id, name, email, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    findEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var result = yield connection_1.default.select("*").from('users').where({ email: email });
                if (result.length > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    selectByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = yield connection_1.default.select("*").from("users").where({ email: email });
            return user[0];
        });
    }
}
exports.default = new User();
