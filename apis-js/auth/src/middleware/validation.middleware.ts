import { RequestHandler, Request, Response, NextFunction } from "express";
import z from "zod";

export interface TypedRequest<T> extends Request {
  body: T;
}

export const validateSchema = <T extends z.ZodTypeAny>(schema: T): RequestHandler => {
  return (req: TypedRequest<T>, res: Response, next: NextFunction): void => {
    const validationResult = schema.safeParse(req.body);

    if (!validationResult.success) {
      res.status(400).json({
        message: "validation failed",
        error: z.flattenError(validationResult.error).fieldErrors,
      });
      return;
    }

    req.body = validationResult.data as unknown as T;
    next();
  };
};
