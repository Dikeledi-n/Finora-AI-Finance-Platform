import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/auth.controller";

const authRoute = Router();

authRoute.post("/register", registerController);
authRoute.post("/login", loginController);

export default authRoute;
