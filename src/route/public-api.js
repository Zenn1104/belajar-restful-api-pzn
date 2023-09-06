import express from "express"
import userController from "../controller/user-controller.js"

const publicRouter = express.Router()

publicRouter.post('/api/users', function(req,res){
    userController.register
})

publicRouter.post('/api/users/login', function(req,res){
    userController.login
})

export {
    publicRouter
}