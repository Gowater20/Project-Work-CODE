import { Router } from "express";
import { Login, Signup } from "../controllers/user.controllers";

export const router = Router();

router.post("/register", Signup) 
router.post("/login", Login) 


