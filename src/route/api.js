import express from "express"
import userController from "../controller/user-controller.js"
import { authMiddleware } from "../middleware/auth-middleware.js"

const userRouter = express.Router()
userRouter.use(authMiddleware)
userRouter.get('/api/users/login', function(req,res){
    userController.get
})
userRouter.patch('/api/users/login', function(req,res){
    userController.update
})
userRouter.delete('/api/users/login', function(req,res){
    userController.logout
})


export {
    userRouter
}