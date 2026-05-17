import Link from 'next/link'
import { ProductInfoCard } from './ProductInfo';
import { ProductInfo } from '@/app/services/page';



const products: ProductInfo[] = [
    {
        imageSrc: '/assets/img/company/product-cake-improver.jpg',
        iconSrc: '/assets/img/service/icon/ingredient.png',
        title: 'CR 600 + CR 630',
        description: 'Improves cake crust color and freshness.',
    },
    {
        imageSrc: '/assets/img/company/cake-gel.png',
        iconSrc: '/assets/img/service/icon/ingredient.png',
        title: 'Cake Gel',
        description: 'Stabilizes the bubbles in the batter, improves cake volume, crust appearance, and reduces cake production costs.',
    },
    {
        imageSrc: '/assets/img/company/product-bakers-fat.jpg',
        iconSrc: '/assets/img/service/icon/ingredient.png',
        title: 'Fastbakes Baker\'s Fat',
        description: 'Supports dough tolerance and uniform loaf quality at scale.',
    },
    {
        imageSrc: '/assets/img/company/pan-grease.png',
        iconSrc: '/assets/img/service/icon/ingredient.png',
        title: 'Pan Grease',
        description: 'Prevents sticking of baked products in baking pans/tins',
    },
];

const productItems: ProductInfo[] = [
    {
        imageSrc: '/assets/img/company/product-cake-gel-3-sizes.jpg',
        iconSrc: '/assets/img/service/icon/ingredient.png',
        title: 'Manufactured Ingredients',
        description:
            'Cake Gel, Baker\'s Fat, Icing Sugar, Pan Grease, White Table Vinegar and CR Products (CR600 & CR630) — made under strict UNBS & TBS standards.',
    },
    {
        imageSrc: '/assets/img/company/product-icing-sugar.jpg',
        iconSrc: '/assets/img/service/icon/blend.png',
        title: 'Cake Premixes',
        description:
            'A full range of Fastbakes premixes — American Oil Muffin, Spongy Cake, Red Velvet, Cup Cake, Smoothie Cake, Magdalenas, and more.',
    },
    {
        imageSrc: '/assets/img/company/product-cr-630.jpg',
        iconSrc: '/assets/img/service/icon/calcium.png',
        title: 'Traded Specialty Ingredients',
        description:
            'Caramel, Potassium & Calcium Sorbate, Desiccated Coconut, Corn Starch, Gelatin, Xanthan Gum, Food Flavors, and more — reliably sourced.',
    },
    {
        imageSrc: '/assets/img/company/product-bakers-fat-packaging.jpg',
        iconSrc: '/assets/img/service/icon/gel.png',
        title: 'Fastbakes Bakers Fat',
        description:
            'A premium quality baking fat made from refined palm oil, stearin, and vegetable oil — enriched with emulsifiers and food-grade additives for consistent texture, volume, and shelf life in breads, pastries, and confectionery.',
    },
];

export default function Service() {
    return (
        <section className="service-section-3 pb-0 fix bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-3.jpg")' }}>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span>Our Specializations</span>
                        <h2>
                            Premium Ingredients <br /> For East Africa
                        </h2>
                    </div>
                    <Link href="/services" className="theme-btn">
                        Explore All Products
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
                <div className="row">
                    {products.map((item) => (
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
                                    <Link href="/tel:+256703412545">+256-703-412-545</Link>
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
    )
}