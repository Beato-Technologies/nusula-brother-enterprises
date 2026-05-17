'use client'

import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

interface HeroSlide {
    backgroundImage: string;
    backgroundPosition?: string;
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
}

const slides: HeroSlide[] = [
    {
        backgroundImage: "assets/img/hero/hero-cr600-cr630.webp",
        backgroundPosition: "center center",
        subtitle: "Food Ingredients Excellence Since 2018",
        titleLine1: "Fastbakes Food Ingredients",
        titleLine2: "For East Africa",
        description: "Nusula and Brother Enterprises is a professional trading and manufacturing company in food ingredients, led by experienced directors and senior executives in their fields.",
    },
    {
        backgroundImage: "assets/img/hero/Slidehome1.webp",
        backgroundPosition: "center center",
        subtitle: "Built on Research and Innovation",
        titleLine1: "From Trading Roots",
        titleLine2: "To Manufacturing Strength",
        description: "What started as a trading business has transformed into large-scale manufacturing, and in over 8 years we have built strong, lasting bonds with our clients.",
    },
    {
        backgroundImage: "assets/img/hero/slidehome-pangrease.png",
        backgroundPosition: "center center",
        subtitle: "Uganda Headquarters, Tanzania Expansion",
        titleLine1: "Sustainable Products",
        titleLine2: "For Food Processing Industries",
        description: "With headquarters in Uganda and expansion to Dar es Salaam in 2025, we continue to transform our industry while staying true to our core values and mission.",
    },
];

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 3000,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
}

function HeroButtons() {
    return (
        <div className="hero-button">
            <Link href="/about" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn hover-white">
                Our Story
                <i className="fa-solid fa-arrow-right-long" />
            </Link>
            <Link href="/contact" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn border-white">
                Contact Sales
                <i className="fa-solid fa-arrow-right-long" />
            </Link>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="hero-section fix hero-3 hero-bakhresa">
            <div className="array-button">
                <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                <button className="array-next"><i className="fal fa-arrow-left" /></button>
            </div>
            <div className="swiper hero-slider">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider-image bg-cover" style={{ backgroundImage: `url("${slide.backgroundImage}")`, backgroundPosition: slide.backgroundPosition ?? "center center" }} />
                            <div className="hero-left-overlay" aria-hidden="true" />
                            <div className="container">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-8">
                                        <div className="hero-content hero-content--bakhresa">
                                            <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">{slide.subtitle}</h5>
                                            <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                                {slide.titleLine1} <br />
                                                {slide.titleLine2}
                                            </h1>
                                            <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                                                {slide.description}
                                            </p>
                                            <HeroButtons />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}