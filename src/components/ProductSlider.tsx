'use client';

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ProductSlideCard, { ProductSlideItem } from "./ProductSlideCard";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-3",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}

type ProductSliderProps = {
    showDots?: boolean;
}

const productSlides: ProductSlideItem[] = [
    {
        imageSrc: '/assets/img/company/product-cake-improver.jpg',
        name: 'CR 600',
        description: 'Improves cake crust color and freshness.',
    },
    {
        imageSrc: '/assets/img/company/product-cr-630.jpg',
        name: 'CR 630',
        description: 'Leavening agent for whitening cake texture, firmness, stability and great taste.',
    },
    {
        imageSrc: '/assets/img/company/cake-gel.png',
        name: 'Cake Gel',
        description: 'Stabilizes the bubbles in the batter, improves cake volume, crust appearance, and reduces cake production costs.',
        imageWidth: 465,
    },
    {
        imageSrc: '/assets/img/company/product-bakers-fat.jpg',
        name: 'Fastbakes Baker\'s Fat',
        description: 'Supports dough tolerance and uniform loaf quality at scale.',
        imageWidth: 465,
    },
    {
        imageSrc: '/assets/img/company/pan-grease.png',
        name: 'Pan Grease',
        description: 'Prevents sticking of baked products in baking pans/tins',
    },
];

export default function ProductSlider({ showDots = false }: ProductSliderProps) {
    return (
        <div className="swiper project-slider pt-5">
            <Swiper {...swiperOptions} className="swiper-wrapper">
                {productSlides.map((item) => (
                    <SwiperSlide key={item.name}>
                        <ProductSlideCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {showDots &&
                <div className="swiper-dot-2">
                    <div className="dot-3" />
                </div>
            }
        </div>
    );
}