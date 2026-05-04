'use client'

import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import AppImage from "./AppImage";

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

export default function Hero() {
    return (
        <section className="hero-section fix hero-3">
            <div className="bottom-shape">
                <AppImage src="/assets/img/hero/bottom-shape.png" alt="shape-img" width={1920} height={275} />
            </div>
            <div className="array-button">
                <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                <button className="array-next"><i className="fal fa-arrow-left" /></button>
            </div>
            <div className="swiper hero-slider">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="slider-image bg-cover" style={{ backgroundImage: 'url("assets/img/hero/hero-2.jpg")' }}>
                            <div className="mask-shape" data-animation="slideInDown" data-duration="3s" data-delay="2s">
                                <AppImage src="/assets/img/hero/mask-shape-2.png" alt="shape-img" width={574} height={139} />
                            </div>
                            <div className="border-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.2s">
                                <AppImage src="/assets/img/hero/border-shape.png" alt="shape-img" width={437} height={617} />
                            </div>
                            <div className="circle-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.1s">
                                <AppImage src="/assets/img/choose/circle.png" alt="shape-img" width={92} height={81} />
                            </div>
                            <div className="frame" data-animation="slideInLeft" data-duration="3s" data-delay="2.2s">
                                <AppImage src="/assets/img/frame.png" alt="shape-img" width={134} height={158} />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">Food Ingredients Excellence Since 2018</h5>
                                        <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                            Fastbakes Food Ingredients <br />
                                            For East Africa
                                        </h1>
                                        <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                                            Nusula and Brother Enterprises is a professional trading and manufacturing company in food ingredients, <br /> led by experienced directors and senior executives in their fields.
                                        </p>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-image bg-cover" style={{ backgroundImage: 'url("assets/img/hero/hero-1.jpg")' }}>
                            <div className="mask-shape" data-animation="slideInDown" data-duration="3s" data-delay="2s">
                                <AppImage src="/assets/img/hero/mask-shape-2.png" alt="shape-img" width={574} height={139} />
                            </div>
                            <div className="border-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.2s">
                                <AppImage src="/assets/img/hero/border-shape.png" alt="shape-img" width={437} height={617} />
                            </div>
                            <div className="circle-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.1s">
                                <AppImage src="/assets/img/choose/circle.png" alt="shape-img" width={92} height={81} />
                            </div>
                            <div className="frame" data-animation="slideInLeft" data-duration="3s" data-delay="2.2s">
                                <AppImage src="/assets/img/frame.png" alt="shape-img" width={134} height={158} />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">Built on Research and Innovation</h5>
                                        <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                            From Trading Roots <br />
                                            To Manufacturing Strength
                                        </h1>
                                        <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                                            What started as a trading business has transformed into large-scale manufacturing, and in over 8 years <br /> we have built strong, lasting bonds with our clients.
                                        </p>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-image bg-cover" style={{ backgroundImage: 'url("assets/img/hero/hero-3.jpg")' }}>
                            <div className="mask-shape" data-animation="slideInDown" data-duration="3s" data-delay="2s">
                                <AppImage src="/assets/img/hero/mask-shape-2.png" alt="shape-img" width={574} height={139} />
                            </div>
                            <div className="border-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.2s">
                                <AppImage src="/assets/img/hero/border-shape.png" alt="shape-img" width={437} height={617} />
                            </div>
                            <div className="circle-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.1s">
                                <AppImage src="/assets/img/choose/circle.png" alt="shape-img" width={92} height={81} />
                            </div>
                            <div className="frame" data-animation="slideInLeft" data-duration="3s" data-delay="2.2s">
                                <AppImage src="/assets/img/frame.png" alt="shape-img" width={134} height={158} />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">Uganda Headquarters, Tanzania Expansion</h5>
                                        <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                            Sustainable Solutions <br />
                                            For Food Processing Industries
                                        </h1>
                                        <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                                            With headquarters in Uganda and expansion to Dar es Salaam in 2025, we continue to transform our industry <br /> while staying true to our core values and mission.
                                        </p>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}