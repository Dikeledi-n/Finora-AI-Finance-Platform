import dotenv from "dotenv";
dotenv.config();
import "./config/passport.config";
import express, { NextFunction, Request, Response } from "express";
import { Env } from "./config/env.config";
import cors from "cors";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { BadRequestException } from "./utils/app-error";
import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import connectDatabase from "./config/database.config";
import authRoute from "./routes/auth.route";
import passport from "passport";
import { passportAuthenticateJwt } from "./config/passport.config";
import userRoutes from "./routes/user.route";
import transactionRoutes from "./routes/transaction.route";
import { initializeCrons } from "./cron";
import reportRoutes from "./routes/report.route";
import analyticsRoutes from "./routes/analytics.route";

const app = express();
const BASE_PATH = Env.BASE_PATH;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());


app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5175"], // allow both ports
    credentials: true,
  })
);



app.get(
  "/",
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    throw new BadRequestException("This is a test error");
    res.status(HTTPSTATUS.OK).json({
      message: "Hello",
    });
  })
);

app.use(`${BASE_PATH}/auth`, authRoute);
app.use(`${BASE_PATH}/user`, passportAuthenticateJwt, userRoutes);
app.use(`${BASE_PATH}/transaction`, passportAuthenticateJwt, transactionRoutes);
app.use(`${BASE_PATH}/report`, passportAuthenticateJwt, reportRoutes);
app.use(`${BASE_PATH}/analytics`, passportAuthenticateJwt, analyticsRoutes);

app.use(errorHandler);

app.listen(Env.PORT, async () => {
  await connectDatabase();

  if (Env.NODE_ENV === "development") {
    await initializeCrons();
  }

  console.log(`Server is running on port ${Env.PORT}
        in ${Env.NODE_ENV} mode`);
});
