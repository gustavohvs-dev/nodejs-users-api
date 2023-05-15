import express from 'express'
import Auth from '../middleware/Auth';
import HomeController from '../controllers/HomeController';
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';

const app = express()
export const router = express.Router()
export const secureRouter = express.Router()

//Acoplar middleware
secureRouter.use(Auth.auth)

//Index route
router.get("/", HomeController.index)

//Login route
router.post("/login", AuthController.login)

//User routes
secureRouter.get("/users", UserController.selectAll)
secureRouter.get("/user/:id", UserController.selectById)
secureRouter.post("/user", UserController.create)
secureRouter.put("/user", UserController.update)
secureRouter.delete("/user/:id", UserController.delete)