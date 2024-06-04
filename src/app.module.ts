import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './typeorm/entities/Movies';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { env } from './env';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModule,
    MoviesModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.DATABASE_URL,
      port: env.DATABASE_PORT,
      username: env.DATABASE_USERNAME,
      password: env.DATABASE_PASSAWORD,
      database: env.DATABASE_NAME,
      ssl: { rejectUnauthorized: false },
      entities: [User, Movie],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
