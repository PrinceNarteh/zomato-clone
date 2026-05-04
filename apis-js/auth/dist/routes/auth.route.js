import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { validateSchema } from "../middleware/validation.middleware.js";
import { userSchema } from "../schemas/user.schema.js";
const authRouter = Router();
authRouter.post("/login", validateSchema(userSchema), login);
authRouter.post("/login", register);
export { authRouter };
