import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/typeorm/entities/Movies';
import { Repository } from 'typeorm';
import { CreateMovieDto } from 'src/movies/controllers/dtos/CreateMovieDto';
import { UpdateMovieDto } from 'src/movies/controllers/dtos/UpdateMovieDto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    const newMovie = await this.movieRepository.create(createMovieDto);
    return this.movieRepository.save(newMovie);
  }

  async findAll(userId: number): Promise<Movie[]> {
    const movies = await this.movieRepository.find({ where: { userId } });
    if (!movies.length) throw new NotFoundException(`Movie not found`);
    return movies;
  }

  async getMovieById(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) throw new NotFoundException(`Movie not found`);
    return movie;
  }

  async updateMovie(id: number, updateMovieDetails: UpdateMovieDto) {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) throw new NotFoundException(`Movie  not found`);
    await this.movieRepository.update(id, updateMovieDetails);
    const updatedMovie = await this.movieRepository.findOne({ where: { id } });
    return updatedMovie;
  }

  async deleteMovie(id: number): Promise<{ message: string }> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) throw new NotFoundException(`Movie  not found`);
    await this.movieRepository.delete(id);
    return { message: `Movie has been deleted successfully` };
  }
}
