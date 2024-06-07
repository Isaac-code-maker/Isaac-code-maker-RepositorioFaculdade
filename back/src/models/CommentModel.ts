import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CommentModel {
  async create(data: { name: string, email: string, comment: string }) {
    return await prisma.comment.create({
      data,
    });
  }

  async findAll() {
    return await prisma.comment.findMany();
  }

  async findById(id: number) {
    return await prisma.comment.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: { name?: string, email?: string, comment?: string }) {
    return await prisma.comment.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.comment.delete({
      where: { id },
    });
  }
}

export default new CommentModel();
