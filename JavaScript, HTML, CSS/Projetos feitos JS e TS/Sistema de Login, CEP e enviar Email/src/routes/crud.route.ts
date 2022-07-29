import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { AccountController } from "../controllers/AccountController";

const crudRoute = Router()

crudRoute.post('/register', new AccountController().createAccount);

export default crudRoute;