import { Request } from "express";

export interface MulterRequest extends Request {
  files: {
    [fieldname: string]: Express.Multer.File[];
  };
}
