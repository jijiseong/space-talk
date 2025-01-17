import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GOOGLE_API_ENDPOINT, GOOGLE_OAUTH_ENDPOINT } from './constants';
import { GoogleToken, GoogleUserInfo } from './types';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { GoogleLoginFailedException } from '@/lib/exceptions/user.exception';
@Injectable()
export class GoogleService {
  constructor(private readonly httpService: HttpService) {}

  async getToken(code: string): Promise<GoogleToken> {
    const url = new URL(GOOGLE_OAUTH_ENDPOINT);
    url.searchParams.set('code', code);
    url.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID);
    url.searchParams.set('client_secret', process.env.GOOGLE_CLIENT_SECRET);
    url.searchParams.set('redirect_uri', process.env.GOOGLE_REDIRECT_URI);
    url.searchParams.set('grant_type', 'authorization_code');

    try {
      const { data } = await this.httpService.axiosRef.post<GoogleToken>(
        url.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      return data;
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      throw new GoogleLoginFailedException();
    }
  }

  async getUserInfo(token: string) {
    const url = new URL(GOOGLE_API_ENDPOINT);
    url.searchParams.set('access_token', token);
    const { data } = await this.httpService.axiosRef.get<GoogleUserInfo>(
      url.toString(),
    );

    if (!data.verified_email) {
      throw new UnauthorizedException('Email is not verified');
    }

    return data;
  }
}
