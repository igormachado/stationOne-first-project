import { prisma } from "../../../database";

export class ListAllMoviesUseCase {
  async execute(id_movie: string) {
    const movies = await prisma.filme.findMany({
      where: {
        id: id_movie,
      },
    });

    return movies;
  }
}
