'use client';

import { PATH } from '@/constants/path';
import { setJWTToCookie } from '@/lib/jwt';
import { loginWithGoogle } from '@/services/user/service';
import { SearchParams } from '@/types/page-props';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';

let didInit = false;

function GoogleOAuthPage({
  searchParams,
}: {
  searchParams: SearchParams<'code' | 'test'>;
}) {
  const { code } = use(searchParams);
  const { replace } = useRouter();
  const { mutate } = useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: async ({ data: { accessToken, refreshToken } }) => {
      await setJWTToCookie({ accessToken, refreshToken });
      replace(PATH.home);
    },
  });

  useEffect(() => {
    if (didInit) return;
    const isValidCode = typeof code === 'string';
    if (!isValidCode) return;

    mutate(code);
    didInit = true;
  }, [code, mutate]);

  return <div>GoogleOAuthPage</div>;
}

export default GoogleOAuthPage;
