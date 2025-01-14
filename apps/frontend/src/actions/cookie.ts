'use server';

import { cookies } from 'next/headers';

export async function setCookie({
  name,
  value,
  expires,
}: {
  name: string;
  value: string;
  expires?: Date;
}) {
  const cookieStore = await cookies();
  cookieStore.set({
    name,
    value,
    secure: true,
    httpOnly: true,
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    expires,
  });
}
