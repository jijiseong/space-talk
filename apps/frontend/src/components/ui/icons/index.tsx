import PngIcon, { PngIconProps } from './png-icon';

function GoogleIcon({ size, ...props }: Omit<PngIconProps, 'src' | 'alt'>) {
  return (
    <PngIcon src="/icons/google.png" alt="google" size={size} {...props} />
  );
}

const Icon = {
  Google: GoogleIcon,
};

export default Icon;
