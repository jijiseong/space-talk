'use client';

import Button from '@/components/ui/button';
import styles from './index.css';
import Dialog from '@/components/ui/dialog';
import Icon from '@/components/ui/icons';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <LoginButton />
      </div>
    </header>
  );
}

function LoginButton() {
  const params = {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    scope: 'email profile',
    response_type: 'code',
  };

  const url = new URL('https://accounts.google.com/o/oauth2/auth');
  url.searchParams.set('client_id', params.client_id);
  url.searchParams.set('redirect_uri', params.redirect_uri);
  url.searchParams.set('scope', params.scope);
  url.searchParams.set('response_type', params.response_type);

  const authUrl = url.toString();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className={styles.loginButton} size="md">
          Login
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Login</Dialog.Title>
          <Dialog.Description>
            Please Login with your Google account.
          </Dialog.Description>
        </Dialog.Header>
        <Button full onClick={() => (window.location.href = authUrl)}>
          <Icon.Google />
          <span>Login with Google</span>
        </Button>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button>Cancel</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default Header;
