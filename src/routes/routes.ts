import express from 'express'
import HomeController from '../controllers/HomeController';
import UserController from '../controllers/UserController';

const app = express()
var router = express.Router()

//Index route
router.get("/", HomeController.index)

//Login route
router.post("/login", UserController.login)

//User routes
router.get("/users", UserController.selectAll)
router.get("/user/:id", UserController.selectById)
router.post("/user", UserController.create)
router.put("/user", UserController.update)
router.delete("/user/:id", UserController.delete)

export default router