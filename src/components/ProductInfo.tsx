import Link from 'next/link';
import AppImage from './AppImage';
import { ProductInfo } from '@/app/services/page';

export function ProductInfoCard({ imageSrc, iconSrc, title, description }: ProductInfo) {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 pt-4">
            <div className="service-card-items">
                <div className="service-image">
                    <AppImage src={imageSrc} alt={`${title} image`} width={270} height={160} />
                </div>
                <div className="icon-2">
                    <AppImage src={iconSrc} alt={`${title} icon`} width={40} height={40} />
                </div>
                <div className="service-content">
                    <h4>
                        <Link href="/services">{title}</Link>
                    </h4>
                    <p>{description}</p>
                    <Link href="/contact" className="theme-btn-2 mt-3">
                        Contact us for a quote
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
            </div>
        </div>
    );
}