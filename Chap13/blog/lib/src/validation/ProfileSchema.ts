import { z } from "zod";

export const createProfileSchema = z.object({
  userName: z.string().min(2).max(50),
  password: z.string().min(10).max(50),
  fullName: z.string().min(2).max(120),
  description: z.string().max(100),
  socialLinkPrimary: z.string().min(2).max(255).optional(),
  socialLinkSecondary: z.string().min(2).max(255).optional(),
});
