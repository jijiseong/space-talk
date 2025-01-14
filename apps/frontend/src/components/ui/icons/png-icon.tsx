import Image from 'next/image';

export interface PngIconProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

function PngIcon({ src, alt, size = 'md', className }: PngIconProps) {
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={sizeMap[size]}
      height={sizeMap[size]}
      className={className}
    />
  );
}

export default PngIcon;
