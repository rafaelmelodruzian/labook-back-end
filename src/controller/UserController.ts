import { ZodError } from "zod";
import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { BaseError } from "../errors/BaseError";


export class UserController {
  constructor(
    private userBusiness: UserBusiness
  ) {}


}   