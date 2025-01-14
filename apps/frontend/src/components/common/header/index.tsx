import Button from '@/components/ui/button';
import styles from './index.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div></div>
        <Button size="md">Login</Button>
      </div>
    </header>
  );
}

export default Header;
