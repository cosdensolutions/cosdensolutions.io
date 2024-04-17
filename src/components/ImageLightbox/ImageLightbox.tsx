'use client';

import Image, { ImageProps } from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

import 'photoswipe/dist/photoswipe.css';

type ImageLightboxProps = ImageProps;

export default function ImageLightbox({
  src,
  alt,
  width,
  height,
  ...rest
}: ImageLightboxProps) {
  return (
    <Gallery>
      <Item
        original={src as string}
        thumbnail={src as string}
        width={width}
        height={height}
      >
        {({ ref, open }) => (
          <Image
            ref={ref}
            onClick={open}
            width={width}
            height={height}
            src={src}
            alt={alt}
            {...rest}
          />
        )}
      </Item>
    </Gallery>
  );
}
