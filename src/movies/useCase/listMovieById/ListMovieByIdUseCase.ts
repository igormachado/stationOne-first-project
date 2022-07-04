import { prisma } from "../../../database";

interface IFindById {
  id_movie: string;
}

export class ListMovieByIdUseCase {
  async execute({ id_movie }: IFindById) {
    const findById = await prisma.filme.findFirst({
      where: {
        id: id_movie,
      },
      select: {
        titulo: true,
        descricao: true,
        autor: true,
      },
    });

    if (!findById) {
      throw new Error("Not found movie.");
    }

    return findById;
  }
}
