import { Request, Response, NextFunction } from "express";
import { AuthModel } from "../models/AuthModel";
import prisma from "../prisma/prisma";
import { STATUS_CODES } from "http";
import jwt from "../utils/jwt";
import bcrypt from 'bcrypt';


class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || !password) {
      return next({
        status: STATUS_CODES.BAD_REQUEST,
        message: 'Some required fields are missing',
      });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return next({
        status: STATUS_CODES.NOT_FOUND,
        message: 'User not found',
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return next({
        status: STATUS_CODES.UNAUTHORIZED,
        message: 'Invalid password',
      });
    }

    const token = jwt.sign({ id: user.id, email: user.email });

    res.status(200).json({ token: token });
  }
}

export default AuthController;
