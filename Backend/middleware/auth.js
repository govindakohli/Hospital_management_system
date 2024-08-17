import { catchAsyncError } from "../middleware/catchAsyncError.js";
import User from "../models/userSchema.js";
import {errorhandler} from "../middleware/errorMiddleware.js";
import jwt from "jsonwebtoken"

// Middleware to authenticate dashboard users
export const isAdminAuthenticated = catchAsyncError(async(req , res , next)=>{
    const token = req.cookies.adminToken;
    if(!token){
        return next(new errorhandler(`User not Authenticated!` , 400))
    }
    const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY)
    req.user = await User.findById(decoded.id)
    if (req.user.role !== "Admin") {
        return next(
          new errorhandler(`${req.user.role} not authorized for this resource!`, 403)
        );
    }
    next()
})


// middleware to autenticate frontend users
export const isPatientAuthenticated = catchAsyncError(async(req , res , next)=>{
    const token = req.cookies.patientToken;
    if(!token){
        return next(new errorhandler("Patient not Authenticated!" , 400))
    }
    const decode = jwt.verify(token , process.env.JWT_SECRET_KEY)
    req.user = await User.findById(decode.id)
    if(req.user.role !== "Patient"){
        return next(new errorhandler(`${req.user.role} not authorized for this Resource` , 403))
    }
    next()
})



