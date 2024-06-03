import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from 'src/movies/services/movies/movies.service';
import { CreateMovieDto } from '../dtos/CreateMovieDto';
import { UpdateMovieDto } from '../dtos/UpdateMovieDto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { User } from 'src/auth/decorators/user.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('movies')
@UseGuards(JwtAuthGuard)
@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDetails: CreateMovieDto, @User() user) {
    const userId = user.userId;
    return this.moviesService.createMovie({ ...createMovieDetails, userId });
  }

  @Get()
  async index(@User() user) {
    const userId = user.userId;
    const movies = await this.moviesService.findAll(userId);
    return movies;
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.getMovieById(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMovieDetails: UpdateMovieDto,
  ) {
    const updatedMovie = await this.moviesService.updateMovie(
      id,
      updateMovieDetails,
    );
    return updatedMovie;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.moviesService.deleteMovie(id);
  }
}
