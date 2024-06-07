import prisma from "../prisma/prisma";
import {hash} from "bcrypt";

interface IUser{
    name: string;
    email: string;
    password: string;
}

class UserModel{
    public async create({name, email, password}: IUser){
        console.log(password);
        const hashPass = await hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPass 
            }
        });

        return user;
    }

    public async list(){
        return await prisma.user.findMany();
    }
}

export {IUser,UserModel};