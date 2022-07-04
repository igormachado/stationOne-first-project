import { Router } from "express";
import { CreateMovieController } from "./movies/useCase/createMovie/CreateMovieController";
import { ListAllMoviesController } from "./movies/useCase/listAllMovies/ListAllMoviesController";
import { ListMovideByIdController } from "./movies/useCase/listMovieById/ListMovieByIdController";

const routes = Router();

const createMovieController = new CreateMovieController();

const listAllMoviesController = new ListAllMoviesController();

const listMovieByIdController = new ListMovideByIdController();

routes.post("/movie", createMovieController.handle);

routes.get("/movies", listAllMoviesController.handle);

routes.get("/movie/:id", listMovieByIdController.handle);

export { routes };
