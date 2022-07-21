import { Router } from "express";
import { LoginAccountController } from "../controllers/LoginAccountController";

const loginRoute = Router();

loginRoute.get('/login', new LoginAccountController().login);

export default loginRoute;