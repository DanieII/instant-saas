import { z } from "zod";

export const instantSchema = z.object({
  field: z.string().min(1, "Field is required"),
});
