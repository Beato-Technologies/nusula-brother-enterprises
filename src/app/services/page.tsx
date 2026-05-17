
import AppImage from '@/components/AppImage';
import { ProductInfoCard } from '@/components/ProductInfo';
import { ProductSlideItem } from '@/components/ProductSlideCard';
import ProductSlider from '@/components/ProductSlider';
import Link from 'next/link'

export type ProductInfo = {
    imageSrc: string;
    iconSrc: string;
    contentIconSrc?: string;
    title: string;
    description: string;
};

const products: ProductInfo[] = [
    {
        imageSrc: '/assets/img/company/product-cake-improver.jpg',
        title: 'CR 600',
        description: 'Improves cake crust color and freshness.',
        iconSrc: '/assets/img/service/icon/ingredient.png',
    },
    {
        imageSrc: '/assets/img/company/product-cr-630.jpg',
        title: 'CR 630',
        description: 'Leavening agent for whitening cake texture, firmness, stability and great taste.',
        iconSrc: '/assets/img/service/icon/ingredient.png',
    },
    {
        imageSrc: '/assets/img/company/cake-gel.png',
        title: 'Cake Gel',
        description: 'Stabilizes the bubbles in the batter, improves cake volume, crust appearance, and reduces cake production costs.',
        iconSrc: '/assets/img/service/icon/ingredient.png',
    },
    {
        imageSrc: '/assets/img/company/product-bakers-fat.jpg',
        title: 'Fastbakes Baker\'s Fat',
        description: 'Supports dough tolerance and uniform loaf quality at scale.',
        iconSrc: '/assets/img/service/icon/ingredient.png',
    },
    {
        imageSrc: '/assets/img/company/pan-grease.png',
        title: 'Pan Grease',
        description: 'Prevents sticking of baked products in baking pans/tins',
        iconSrc: '/assets/img/service/icon/ingredient.png',
    },
];



export default function Service() {
    return (
        <>
            <section className="service-section-3 pb-0 pt-5 fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-3.jpg")' }}>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span>Our Specializations</span>
                            <h2>
                                Premium Ingredients <br /> For East Africa
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        {products.map((item) => (
                            <ProductInfoCard
                                key={item.title}
                                imageSrc={item.imageSrc}
                                iconSrc={item.iconSrc}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
                <div className="cta-banner-2 section-padding">
                    <div className="container">
                        <div className="cta-wrapper-2">
                            <div className="author-icon">
                                <div className="icon">
                                    <i className="fa-solid fa-phone" />
                                </div>
                                <div className="content">
                                    <span>Call Us Now</span>
                                    <h4>
                                        <Link href="tel:+256703412545">+256 703 412 545</Link>
                                    </h4>
                                </div>
                            </div>
                            <h3>
                                Partner With Us For <br /> Reliable Ingredient Performance
                            </h3>
                            <Link href="/contact" className="theme-btn bg-white">
                                Request A Commercial Quote
                                <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
