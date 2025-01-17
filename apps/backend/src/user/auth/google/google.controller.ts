import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { GoogleService } from './google.service';
import { CreateGoogleDto } from './dto/create-google.dto';
import { AuthService } from '../auth.service';

@Controller('user/auth/google')
export class GoogleController {
  constructor(
    private readonly googleService: GoogleService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async login(@Body() createGoogleDto: CreateGoogleDto) {
    const { data: googleToken } = await this.googleService.getToken(
      createGoogleDto.code,
    );
    const { name, email, verified_email } =
      await this.googleService.getUserInfo(googleToken.access_token);

    if (!verified_email) {
      throw new UnauthorizedException('Email is not verified');
    }

    const serviceToken = await this.authService.userInfoToToken({
      username: name,
      email,
    });

    return serviceToken;
  }
}
