import { Router } from "express";
import { Login, Signup } from "../controllers/user.controllers";
import { verifyToken } from "../middlewares/user.auth";
export const router = Router();

router.post("/register", Signup) //Allows users to register
//TODO router.post("/admin/register", Login) //Allows you to register a new admin
router.post("/login", Login) //Allows users to log in
//TODO router.delete("/logout",) //Allow users to log out
//TODO router.get("/user", verifyToken) //Returns the information of the currently authenticated user (generic or Admin).

