declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_FRONTEND_URL: string;

    NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string;
    NEXT_PUBLIC_GOOGLE_REDIRECT_URI: string;

    NEXT_PUBLIC_COOKIE_DOMAIN: string;
  }
}
