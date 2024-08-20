import { catchAsyncError } from "../middleware/catchAsyncError.js";
import User from "../models/userSchema.js";
import {errorhandler} from "../middleware/errorMiddleware.js";
import jwt from "jsonwebtoken"

// Middleware to authenticate dashboard users
export const isAdminAuthenticated = catchAsyncError(async (req, res, next) => {
    const token = req.cookies.adminToken;
  
    if (!token) {
      return next(new errorhandler(`User not authenticated!`, 401));
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decoded.id);
  
      if (!req.user) {
        return next(new errorhandler(`User not found!`, 404));
      }
  
      if (req.user.role !== "Admin") {
        return next(
          new errorhandler(`Role ${req.user.role} not authorized for this resource!`, 403)
        );
      }
  
      next();
    } catch (error) {
      if (error.name === "JsonWebTokenError") {
        return next(new errorhandler(`Invalid token!`, 401));
      }
  
      if (error.name === "TokenExpiredError") {
        return next(new errorhandler(`Token expired!`, 401));
      }
  
      return next(new errorhandler(`Authentication failed!`, 401));
    }
  });
  


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



