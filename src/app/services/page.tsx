
import { ProductInfoCard } from '@/components/ProductInfo';
import Link from 'next/link'

export type ProductInfo = {
    imageSrc: string;
    iconSrc: string;
    contentIconSrc?: string;
    title: string;
    description: string;
};

const productInfoItems: ProductInfo[] = [
    {
        imageSrc: '/assets/img/company/product-cake-gel-3-sizes.jpg',
        iconSrc: '/assets/img/service/icon/s-icon-11.svg',
        title: 'Manufactured Ingredients',
        description:
            'Cake Gel, Baker\'s Fat, Icing Sugar, Pan Grease, White Table Vinegar and CR Products (CR600 & CR630) — made under strict UNBS & TBS standards.',
    },
    {
        imageSrc: '/assets/img/company/product-icing-sugar.jpg',
        iconSrc: '/assets/img/service/icon/s-icon-7.svg',
        title: 'Cake Premixes',
        description:
            'A full range of Fastbakes premixes — American Oil Muffin, Spongy Cake, Red Velvet, Cup Cake, Smoothie Cake, Magdalenas, and more.',
    },
    {
        imageSrc: '/assets/img/company/product-cr-630.jpg',
        iconSrc: '/assets/img/service/icon/s-icon-8.svg',
        title: 'Traded Specialty Ingredients',
        description:
            'Caramel, Potassium & Calcium Sorbate, Desiccated Coconut, Corn Starch, Gelatin, Xanthan Gum, Food Flavors, and more — reliably sourced.',
    },
    {
        imageSrc: '/assets/img/company/product-bakers-fat-packaging.jpg',
        iconSrc: '/assets/img/service/icon/s-icon-1.svg',
        title: 'Fastbakes Bakers Fat',
        description:
            'A premium quality baking fat made from refined palm oil, stearin, and vegetable oil — enriched with emulsifiers and food-grade additives for consistent texture, volume, and shelf life in breads, pastries, and confectionery.',
    },
    {
        imageSrc: '/assets/img/company/company-truck-with-products.jpg',
        iconSrc: '/assets/img/service/icon/s-icon-3.svg',
        title: 'Regional Distribution',
        description:
            'Serving Uganda and Tanzania with efficient delivery networks — supporting bakeries, processors, and food manufacturers across East Africa.',
    },
];



export default function Service() {
    return (
        <>
            <section className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-3.jpg")' }}>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span>Our Specializations</span>
                            <h2>
                                Premium Ingredient Solutions <br /> For East Africa
                            </h2>
                        </div>
                        <Link href="/services" className="theme-btn">
                            Explore All Solutions
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                    <div className="row">
                        {productInfoItems.map((item) => (
                            <ProductInfoCard
                                key={item.title}
                                imageSrc={item.imageSrc}
                                iconSrc={item.iconSrc}
                                contentIconSrc={item.contentIconSrc}
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
                                        <Link href="tel:+255796317866">+255 796 317 866</Link>
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
