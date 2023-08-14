import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ZodError } from "zod";
import { BaseError } from "../errors/BaseError";

export class PostController {
  constructor(
    private postBusiness: PostBusiness
  ) {}

}