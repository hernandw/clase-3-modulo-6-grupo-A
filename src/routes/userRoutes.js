import express from "express";
import { home, about, login, contact, getUsers, getProducts, addUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", home);

router.get("/about", about);

router.get("/login", login);

router.get("/contact", contact);

router.get('/users', getUsers)

router.get('/products', getProducts)

router.post('/user', addUser)

export default router;
