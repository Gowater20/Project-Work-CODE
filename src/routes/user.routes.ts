import { Router } from "express";
import { Login, Logout, Signup } from "../controllers/user.controllers";
import { verifyToken } from "../middlewares/user.auth";
export const router = Router();

router.post("/register", Signup) //Permette agli utenti di registrarsi
//TODO inserisci whitelist
//router.post("/admin/register", Login) //Permette di registrare un nuovo admin
router.post("/login", Login) //Permette agli utenti di effettuare il login
router.delete("/logout", Logout) //Permette agli utenti di disconnettersi.
router.get("/user", verifyToken, Login) //Restituisce le informazioni dell'utente attualmente autenticato (generico o Admin).  */

