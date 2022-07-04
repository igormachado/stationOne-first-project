import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController {
  async handle(request: Request, response: Response) {
    const { titulo, descricao, autor } = request.body;

    const createMovieUseCase = new CreateMovieUseCase();
    try {
      const movie = await createMovieUseCase.execute({
        titulo,
        descricao,
        autor,
      });

      return response.status(201).json(movie);
    } catch (err) {
      return response.status(400).json({ message: "Movie already exists" });
    }
    {
    }
  }
}
