import { z } from "zod";

export const ticketSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
  status: z.string().min(1, "Status").optional(),
  priority: z.string().min(1, "Priority").optional(),
});
