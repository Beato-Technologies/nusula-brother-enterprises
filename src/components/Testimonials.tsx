'use client'

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import AppImage from "./AppImage";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 1,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
}

export default function Testimonials() {
    return (
        <section className="tesimonial-section-3 section-padding section-bg-2 bg-cover">
            <div className="line-shape">
                <AppImage src="/assets/img/team/line-shape.png" alt="shape-img" width={465} height={605} />
            </div>
            <div className="mask-shape">
                <AppImage src="/assets/img/team/mask-shape.png" alt="shape-img" width={343} height={610} />
            </div>
            <div className="array-button">
                <button className="array-prev"><i className="fal fa-arrow-left" /></button>
                <button className="array-next"><i className="fal fa-arrow-right" /></button>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="text-white">Client Endorsements</span>
                    <h2 className="text-white">
                        Trusted By Industrial Food Producers
                    </h2>
                </div>
                <div className="swiper testimonial-slider-2">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="testimonial-box-items">
                                <div className="icon">
                                    <AppImage src="/assets/img/testimonial/icon.png" alt="icon-img" width={50} height={37} />
                                </div>
                                <div className="client-items">
                                    <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/02.jpg")' }} />
                                    <div className="client-content">
                                        <h4>Grace Namara</h4>
                                        <p>Head of Operations, Kampala Bakehouse</p>
                                        <div className="star">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Nusula and Brother Enterprises has helped us maintain consistent product quality and supply. Their Fastbakes ingredients have improved our production reliability and customer satisfaction.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-box-items">
                                <div className="icon">
                                    <AppImage src="/assets/img/testimonial/icon.png" alt="icon-img" width={50} height={37} />
                                </div>
                                <div className="client-items">
                                    <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/03.jpg")' }} />
                                    <div className="client-content">
                                        <h4>David Mboya</h4>
                                        <p>Procurement Manager, Dar Fresh Foods</p>
                                        <div className="star">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star color-text" />
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    We value their responsiveness, technical guidance, and product consistency. Nusula is a dependable partner for our day-to-day ingredient requirements.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-box-items">
                                <div className="icon">
                                    <AppImage src="/assets/img/testimonial/icon.png" alt="icon-img" width={50} height={37} />
                                </div>
                                <div className="client-items">
                                    <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/02.jpg")' }} />
                                    <div className="client-content">
                                        <h4>Grace Namara</h4>
                                        <p>Head of Operations, Kampala Bakehouse</p>
                                        <div className="star">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Nusula and Brother Enterprises has helped us maintain consistent product quality and supply. Their Fastbakes ingredients have improved our production reliability and customer satisfaction.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-box-items">
                                <div className="icon">
                                    <AppImage src="/assets/img/testimonial/icon.png" alt="icon-img" width={50} height={37} />
                                </div>
                                <div className="client-items">
                                    <div className="client-image style-2 bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/03.jpg")' }} />
                                    <div className="client-content">
                                        <h4>David Mboya</h4>
                                        <p>Procurement Manager, Dar Fresh Foods</p>
                                        <div className="star">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star color-text" />
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    We value their responsiveness, technical guidance, and product consistency. Nusula is a dependable partner for our day-to-day ingredient requirements.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}