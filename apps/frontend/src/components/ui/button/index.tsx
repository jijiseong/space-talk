import { cn } from '@/lib/utils';
import styles from './index.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

function Button({
  variants = 'primary',
  size = 'md',
  children,
  onClick,
  type,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={cn(styles.base, styles.size[size], styles.color[variants])}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
