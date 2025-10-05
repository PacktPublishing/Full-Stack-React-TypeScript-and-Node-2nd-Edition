import { ZodType, ZodError } from "zod";
import type { RequestHandler } from "express";
import type { ParamsDictionary } from "express-serve-static-core";
import type { ParsedQs } from "qs";

export function validate(schema: {
  body?: ZodType;
  query?: ZodType;
  params?: ZodType;
}): RequestHandler {
  return async (req, res, next) => {
    try {
      if (schema.body) req.body = await schema.body.parseAsync(req.body);
      if (schema.query)
        req.query = (await schema.query.parseAsync(req.query)) as ParsedQs;
      if (schema.params)
        req.params = (await schema.params.parseAsync(
          req.params
        )) as ParamsDictionary;
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          message: "Validation failure",
          errors: (err as ZodError).issues,
        });
      }
      next(err);
    }
  };
}
