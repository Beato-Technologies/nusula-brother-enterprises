'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import AppImage from "./AppImage";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    // slidesPerView: 5,
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function BrandSlider() {
    return (
        <div className="swiper brand-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
                <SwiperSlide>
                    <div className="brand-image">
                        <AppImage src="/assets/img/brand.png" alt="brand-img" width={154} height={31} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-image">
                        <AppImage src="/assets/img/brand.png" alt="brand-img" width={154} height={31} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-image">
                        <AppImage src="/assets/img/brand.png" alt="brand-img" width={154} height={31} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-image">
                        <AppImage src="/assets/img/brand.png" alt="brand-img" width={154} height={31} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-image">
                        <AppImage src="/assets/img/brand.png" alt="brand-img" width={154} height={31} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-image">
                        <AppImage src="/assets/img/brand.png" alt="brand-img" width={154} height={31} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-image">
                        <AppImage src="/assets/img/brand.png" alt="brand-img" width={154} height={31} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-image">
                        <AppImage src="/assets/img/brand.png" alt="brand-img" width={154} height={31} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-image">
                        <AppImage src="/assets/img/brand.png" alt="brand-img" width={154} height={31} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand-image">
                        <AppImage src="/assets/img/brand.png" alt="brand-img" width={154} height={31} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}