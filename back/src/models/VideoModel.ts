import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class VideoModel {
  async create(data: { title: string, description: string, incorporationLink: string, link: string }) {
    return await prisma.video.create({
      data,
    });
  }

  async findAll() {
    return await prisma.video.findMany();
  }

  async findById(id: number) {
    return await prisma.video.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: { title?: string, description?: string, incorporationLink?: string, link?: string }) {
    return await prisma.video.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.video.delete({
      where: { id },
    });
  }
}

export default new VideoModel();
