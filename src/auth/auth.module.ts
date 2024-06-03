import { AuthController } from './controllers/auth/auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './controllers/strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt.guard';
import { env } from 'src/env';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
})
export class AuthModule {}
