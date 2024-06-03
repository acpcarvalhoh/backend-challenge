import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthPayloadDto } from 'src/auth/controllers/Dtos/autDto';
import { User } from 'src/typeorm/entities/User';
import { comparePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(authPayload: AuthPayloadDto) {
    const user = await this.findUserByEmail(authPayload.email);
    this.validatePassword(authPayload.password, user.password);
    const accessToken = this.generateAccessToken(user);
    return { accessToken };
  }

  private async findUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User not found`);
    }
    return user;
  }

  private validatePassword(plainPassword: string, hashedPassword: string) {
    const isPasswordValid = comparePassword(plainPassword, hashedPassword);
    if (!isPasswordValid) {
      throw new UnauthorizedException(`Invalid password`);
    }
  }

  private generateAccessToken(user: User): string {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
