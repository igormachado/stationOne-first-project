import { prisma } from "../../../database";

interface ICreateMovie {
  titulo: string;
  descricao: string;
  autor: string;
}

export class CreateMovieUseCase {
  async execute({ titulo, descricao, autor }: ICreateMovie) {
    const movieExists = await prisma.filme.findFirst({
      where: {
        titulo: {
          equals: titulo,
          mode: "insensitive",
        },
      },
    });

    if (movieExists) {
      throw new Error("Movie already exists");
    }

    const movie = await prisma.filme.create({
      data: {
        titulo,
        descricao,
        autor,
      },
    });

    return movie;
  }
}
