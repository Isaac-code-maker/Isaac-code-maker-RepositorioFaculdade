import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
interface ILogin{
    email: string;
    password: string;
}

class AuthModel {
  
}

export {AuthModel, ILogin};
