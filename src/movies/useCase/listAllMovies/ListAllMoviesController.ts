import { Request, Response } from "express";
import { ListAllMoviesUseCase } from "./ListAllMoviesUseCase";

export class ListAllMoviesController {
  async handle(request: Request, response: Response) {
    const { id_movie } = request.params;

    const listAllMoviesUseCase = new ListAllMoviesUseCase();

    const listAllMovies = await listAllMoviesUseCase.execute(id_movie);

    return response.status(201).json(listAllMovies);
  }
}
