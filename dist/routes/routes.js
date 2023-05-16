"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secureRouter = exports.router = void 0;
const express_1 = __importDefault(require("express"));
const Auth_1 = __importDefault(require("../middleware/Auth"));
const HomeController_1 = __importDefault(require("../controllers/HomeController"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const app = (0, express_1.default)();
exports.router = express_1.default.Router();
exports.secureRouter = express_1.default.Router();
//Acoplar middleware
exports.secureRouter.use(Auth_1.default.auth);
//Index route
exports.router.get("/", HomeController_1.default.index);
//Login route
exports.router.post("/login", AuthController_1.default.login);
//User routes
exports.secureRouter.get("/users", UserController_1.default.selectAll);
exports.secureRouter.get("/user/:id", UserController_1.default.selectById);
exports.secureRouter.post("/user", UserController_1.default.create);
exports.secureRouter.put("/user", UserController_1.default.update);
exports.secureRouter.delete("/user/:id", UserController_1.default.delete);
