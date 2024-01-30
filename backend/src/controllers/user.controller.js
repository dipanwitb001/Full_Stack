import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {ApiResponse} from "../utils/ApiResponse.js"
//import {jwt} from "jsonwebtoken";
import mongoose from "mongoose";


const registerUser = asyncHandler( async (req,res) => {

    // return res.status(200).json({
    //     message:"ok"
    // })

    const {name, email, password} = req.body
    //console.log("firstname:",firstname,"\nlastname:",lastname,"\nemail:",email,"\npassword:",password)
    console.log("req.body:",req.body)

     if(
          [name, email, password].some((field) => !field || field.trim() === "")
      ) {
          throw new ApiError(400, "All fields are required")
      }

    // if ([name, email, password].some((field) => typeof field !== 'string' || field.trim() === "")) {
    //     throw new ApiError(400, "All fields are required");
    //   }
     const existedUser = await User.findOne({email: email})
     if (existedUser)
     {
         throw new ApiError(409,"email is already in use")
     }
    //  if(password !== confirmPassword)
    //  {
    //      throw new ApiError(404,"password does not match")
    //  }

     try {
        console.log("Before creating user:", name);
        const user = await User.create({
            name,
            email,
            password,
        })
        const createdUser = await User.findById(user._id).select("-password -refreshToken -confirmPassword")
        if(!createdUser)
        {
            throw new ApiError(500,"Something went wrong while registering the user")
        }
        
        return res
        .status(201)
        .json(new ApiResponse(200, createdUser,"User registered successfully"))
        
     } catch (error) {
        console.error('Error creating user document:', error);
            throw new ApiError(500, 'Error creating user document');
     }
})

export { registerUser}