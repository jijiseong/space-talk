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
        <Button full>
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
