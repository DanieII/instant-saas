import { exampleSchema } from "./schemas";
import { z } from "zod";

export type ExampleFormData = z.infer<typeof exampleSchema>;
