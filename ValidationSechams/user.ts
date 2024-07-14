import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Name is required"),
  username: z.string().min(3, "Username is required"),
  password: z
    .string()
    .min(5, "Please use a strong password")
    .optional()
    .or(z.literal("")),
  role: z.string().min(3, "Role is required"),
});
