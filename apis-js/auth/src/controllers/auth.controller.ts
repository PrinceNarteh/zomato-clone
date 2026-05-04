import { Request, Response } from "express";
import { TryCatch } from "../middleware/trycatch.middleware.js";

export const login = TryCatch(async (req: Request, res: Response) => {
  const { email, ...data } = req.body;
  res.status(200).json({ data });
});

export const register = async (req: Request, res: Response) => {};
