import Link from 'next/link';
import AppImage from './AppImage';

export type ProductSlideItem = {
    imageSrc: string;
    name: string;
    description?: string;
    href?: string;
    imageWidth?: number;
    imageHeight?: number;
};

type ProductSlideCardProps = {
    item: ProductSlideItem;
};

export default function ProductSlideCard({ item }: ProductSlideCardProps) {
    return (
        <div className="project-items">
            <div className="project-image">
                <AppImage
                    src={item.imageSrc}
                    alt={`${item.name} product image`}
                    width={item.imageWidth ?? 450}
                    height={item.imageHeight ?? 450}
                />
                <div className="project-content">
                    <h4>
                        <Link href={item.href ?? '/services'}>{item.name}</Link>
                    </h4>
                    {item.description ? <p>{item.description}</p> : null}
                </div>
            </div>
        </div>
    );
}
