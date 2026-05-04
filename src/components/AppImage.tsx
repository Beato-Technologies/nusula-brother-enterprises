import Image, { ImageProps } from 'next/image';

type AppImageProps = Omit<ImageProps, 'sizes'> & {
    sizes?: string;
    alt?: string;
};

export default function AppImage({ fill, sizes, ...props }: AppImageProps) {
    return (
        <Image
            {...props}
            alt={props.alt || 'image'}
            fill={fill}
            sizes={sizes ?? (fill ? '100vw' : undefined)}
        />
    );
}