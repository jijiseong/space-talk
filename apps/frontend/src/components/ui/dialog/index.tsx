import * as RadixDialog from '@radix-ui/react-dialog';
import styles from './index.css';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

function DialogContent({
  className,
  children,
  ...props
}: RadixDialog.DialogContentProps) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay />
      <RadixDialog.Content
        className={cn(styles.dialogContent, className)}
        {...props}
      >
        <RadixDialog.Close className={styles.closeButton}>
          <X />
        </RadixDialog.Close>
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}

function DialogHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(styles.header, className)} {...props}>
      {children}
    </div>
  );
}

function DialogFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(styles.footer, className)} {...props}>
      {children}
    </div>
  );
}

function DialogTitle({
  className,
  children,
  ...props
}: RadixDialog.DialogTitleProps) {
  return (
    <RadixDialog.Title className={cn(styles.title, className)} {...props}>
      {children}
    </RadixDialog.Title>
  );
}

function DialogDescription({
  className,
  children,
  ...props
}: RadixDialog.DialogDescriptionProps) {
  return (
    <RadixDialog.Description
      className={cn(styles.description, className)}
      {...props}
    >
      {children}
    </RadixDialog.Description>
  );
}

const Dialog = {
  Root: RadixDialog.Root,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: RadixDialog.Close,
  Trigger: RadixDialog.Trigger,
  Header: DialogHeader,
  Footer: DialogFooter,
};

export default Dialog;
