import z from "zod";

export const userSchema = z.object({
  firstName: z.string({ error: "firstName is required" }).min(2),
  lastName: z.string({ error: "lastName is required" }).min(2),
  email: z.email(),
  password: z.string().min(6),
  image: z.string().optional(),
  role: z.string().default("customer"),
});
