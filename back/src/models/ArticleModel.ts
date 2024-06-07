import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ArticleModel {
  async create(data: { title: string, description: string, link: string }) {
    return await prisma.article.create({
      data,
    });
  }

  async findAll() {
    return await prisma.article.findMany();
  }

  async findById(id: number) {
    return await prisma.article.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: { title?: string, description?: string, link?: string }) {
    return await prisma.article.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.article.delete({
      where: { id },
    });
  }
}

export default new ArticleModel();
