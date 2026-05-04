import { TryCatch } from "../middleware/trycatch.middleware.js";
export const login = TryCatch(async (req, res) => {
    const { email, ...data } = req.body;
    res.status(200).json({ data });
});
export const register = async (req, res) => { };
