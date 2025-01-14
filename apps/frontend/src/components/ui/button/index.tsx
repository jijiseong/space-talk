import { cn } from '@/lib/utils';
import styles from './index.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  full?: boolean;
}

function Button({
  variants = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  type,
  full = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      style={{ width: full ? '100%' : 'auto' }}
      className={cn(
        styles.base,
        styles.size[size],
        styles.color[variants],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
