import express from 'express'
import Auth from '../middleware/Auth';
import HomeController from '../controllers/HomeController';
import UserController from '../controllers/UserController';

const app = express()
var router = express.Router()

//Index route
router.get("/", HomeController.index)

//Login route
router.post("/login", UserController.login)

//User routes
router.get("/users", Auth.auth, UserController.selectAll)
router.get("/user/:id", Auth.auth, UserController.selectById)
router.post("/user", Auth.auth, UserController.create)
router.put("/user", Auth.auth, UserController.update)
router.delete("/user/:id", Auth.auth, UserController.delete)

export default router