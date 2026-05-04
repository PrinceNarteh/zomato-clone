import z from "zod";
export const validateSchema = (schema) => {
    return (req, res, next) => {
        const validationResult = schema.safeParse(req.body);
        if (!validationResult.success) {
            res.status(400).json({
                message: "validation failed",
                error: z.flattenError(validationResult.error).fieldErrors,
            });
            return;
        }
        req.body = validationResult.data;
        next();
    };
};
