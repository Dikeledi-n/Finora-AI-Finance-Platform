import { getEnv } from "../utils/get-env";

const envConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "development"),

  PORT: getEnv("PORT", "8000"),
  BASE_PATH: getEnv("BASE_PATH", "/api"),
  MONGO_URI: getEnv("MONGO_URI", "mongodb+srv://dikeledintjobokwane:abIJLaojNK5EsCiy@cluster0.vw0w4qr.mongodb.net/finance_platform_app_db?retryWrites=true&w=majority"),

   JWT_SECRET: getEnv("JWT_SECRET", "secret_jwt"),
   JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15m") as string,

   JWT_REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET", "secret_jwt_refresh"),
   JWT_REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "7d") as string,

   GEMINI_API_KEY: getEnv("GEMINI_API_KEY", "AIzaSyDuOXJDTReT2ZZAWQFCE0YwOmHkhrC0Eew"),

   CLOUDINARY_CLOUD_NAME: getEnv("CLOUDINARY_CLOUD_NAME","dlibl1sfu"),
   CLOUDINARY_API_KEY: getEnv("CLOUDINARY_API_KEY", "813716983619959"),
   CLOUDINARY_API_SECRET: getEnv("CLOUDINARY_API_SECRET", "kLrHSYdlLb09Ild2vNEiroiG7Cg"),

   RESEND_API_KEY: getEnv("RESEND_API_KEY", "re_iNgrwBrA_4gD1xBLjFteMSZSEyww9HdQe"),
   RESEND_MAILER_SENDER: getEnv("RESEND_MAILER_SENDER", "onboarding@resend.dev"),

  FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "http://localhost:5173"),
});

export const Env = envConfig();