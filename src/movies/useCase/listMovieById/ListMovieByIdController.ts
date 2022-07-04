import { Request, Response } from "express";
import { ListMovieByIdUseCase } from "./ListMovieByIdUseCase";

export class ListMovideByIdController {
  async handle(request: Request, response: Response) {
    const { id: id_movie } = request.params;

    const listMovieByIdUseCase = new ListMovieByIdUseCase();

    try {
      const listMovieById = await listMovieByIdUseCase.execute({ id_movie });

      return response.status(201).json(listMovieById);
    } catch (err) {
      return response.status(400).json({ error: "Error" });
    }
  }
}
