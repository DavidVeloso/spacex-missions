import { FC, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@chakra-ui/react';

interface IImageLoaderProps {
  src: string | StaticImageData;
  alt: string;
  height: number;
  width: number;
}

const ImageLoader: FC<IImageLoaderProps> = ({ src, alt, height, width }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Skeleton isLoaded={!loading}>
      <Image
        src={src}
        alt={alt}
        loading='lazy'
        height={height}
        width={width}
        onLoadingComplete={() => setLoading(false)}
      />
    </Skeleton>
  );
};

export default ImageLoader;