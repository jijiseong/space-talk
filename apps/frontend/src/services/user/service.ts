import api from '@/lib/api';
import { ApiResponse } from '@repo/shared/types';

export async function loginWithGoogle(code: string) {
  const { data } = await api.post<
    ApiResponse<{ accessToken: string; refreshToken: string }>
  >('/user/auth/google', { code });

  return data;
}
