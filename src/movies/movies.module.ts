import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/movies/movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/typeorm/entities/Movies';
import { MoviesService } from './services/movies/movies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
