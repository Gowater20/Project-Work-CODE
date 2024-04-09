import express from "express";
import { router as authApi } from "./routes/user.routes";
import { router as productApi } from "./routes/product.routes";


export const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Server is online" });
});


//rotta per autenticazione
app.use("/api/auth/", authApi);
app.use("/api/product/", productApi);

