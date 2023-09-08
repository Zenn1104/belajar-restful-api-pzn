import express from "express"
import userController from "../controller/user-controller.js"
import contactController from "../controller/contact-controller.js"
import { authMiddleware } from "../middleware/auth-middleware.js"

const userRouter = express.Router()
userRouter.use(authMiddleware)

// user API
userRouter.get('/api/users/login', function(req,res){
    userController.get
})
userRouter.patch('/api/users/login', function(req,res){
    userController.update
})
userRouter.delete('/api/users/login', function(req,res){
    userController.logout
})

// contact API
userRouter.post('/api/contacts', function(req,res){
    contactController.create
})
userRouter.get('/api/contacts/:contactId', function(req,res){
    contactController.get
})


export {
    userRouter
}