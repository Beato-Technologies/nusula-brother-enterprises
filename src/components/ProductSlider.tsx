'use client';

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import AppImage from "./AppImage";

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

export default function ProductSlider({ showDots = false }: ProductSliderProps) {
    return (
        <div className="swiper project-slider pt-5">
            <Swiper {...swiperOptions} className="swiper-wrapper">
                <SwiperSlide>
                    <div className="project-items">
                        <div className="project-image">
                            <AppImage src="/assets/img/project/01.jpg" alt="project-img" width={450} height={450} />
                            <div className="project-content">
                                <p>Manufacturing</p>
                                <h4>
                                    <Link href="/project-details">Fastbakes Production Growth</Link>
                                </h4>
                                <Link href="/project-details" className="icon">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-items">
                        <div className="project-image">
                            <AppImage src="/assets/img/project/02.jpg" alt="project-img" width={465} height={450} />
                            <div className="project-content">
                                <p>Quality</p>
                                <h4>
                                    <Link href="/project-details">Ingredient Quality Assurance</Link>
                                </h4>
                                <Link href="/project-details" className="icon">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-items">
                        <div className="project-image">
                            <AppImage src="/assets/img/project/03.jpg" alt="project-img" width={465} height={450} />
                            <div className="project-content">
                                <p>Innovation</p>
                                <h4>
                                    <Link href="/project-details">Research-Driven Product Solutions</Link>
                                </h4>
                                <Link href="/project-details" className="icon">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-items">
                        <div className="project-image">
                            <AppImage src="/assets/img/project/04.jpg" alt="project-img" width={450} height={450} />
                            <div className="project-content">
                                <p>Expansion</p>
                                <h4>
                                    <Link href="/project-details">Uganda to Tanzania Market Reach</Link>
                                </h4>
                                <Link href="/project-details" className="icon">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-items">
                        <div className="project-image">
                            <AppImage src="/assets/img/project/03.jpg" alt="project-img" width={465} height={450} />
                            <div className="project-content">
                                <p>Partnerships</p>
                                <h4>
                                    <Link href="/project-details">Long-Term Client Relationships</Link>
                                </h4>
                                <Link href="/project-details" className="icon">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-items">
                        <div className="project-image">
                            <AppImage src="/assets/img/project/04.jpg" alt="project-img" width={450} height={450} />
                            <div className="project-content">
                                <p>Sustainability</p>
                                <h4>
                                    <Link href="/project-details">Sustainable Industry Solutions</Link>
                                </h4>
                                <Link href="/project-details" className="icon">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {showDots &&
                <div className="swiper-dot-2">
                    <div className="dot-3" />
                </div>
            }
        </div>
    );
}