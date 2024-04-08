import { Router } from "express";
import { Login, Signup } from "../controllers/user.controllers";

export const router = Router();

router.post("/register", Signup) //Permette agli utenti di registrarsi
router.post("/admin/register", Login) //Permette di registrare un nuovo admin

router.post("/login", Login) //Permette agli utenti di effettuare il login
router.post("/logout", Login) //Permette agli utenti di disconnettersi.
router.post("/user", Login) //Restituisce le informazioni dell'utente attualmente autenticato (generico o Admin). */


