import { setCookie } from '@/actions/cookie';
import { SECOND } from '@repo/shared';

export const decodeJWT = (token: string) => {
  try {
    const payload = token.split('.')[1];
    if (!payload) throw new Error('Invalid token');
    return JSON.parse(atob(payload)) as { exp: number };
  } catch {
    throw new Error('Invalid token');
  }
};

export const setJWTToCookie = async ({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) => {
  const { exp: accessTokenExp } = decodeJWT(accessToken);
  const { exp: refreshTokenExp } = decodeJWT(refreshToken);

  await Promise.all([
    setCookie({
      name: 'accessToken',
      value: accessToken,
      expires: new Date(accessTokenExp * SECOND),
    }),
    setCookie({
      name: 'refreshToken',
      value: refreshToken,
      expires: new Date(refreshTokenExp * SECOND),
    }),
  ]);
};
