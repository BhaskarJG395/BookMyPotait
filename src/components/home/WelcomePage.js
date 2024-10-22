import React, { useRef } from "react";
import "../../css/WelcomePage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/effect-coverflow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Art1 from '../../image/welArt1.jpg';
import Art2 from '../../image/welArt2.jpg';
import Art3 from '../../image/welArt3.jpg';
import Art4 from '../../image/welArt4.jpg';
import Art5 from '../../image/welArt5.jpg';
export default function WelcomePage() {
    // Use an array to store images
    const arts = [Art1, Art2, Art3, Art4, Art5];
    
    // Create a reference for the Swiper
    const swiperRef = useRef(null);

    // Function to navigate to the previous slide
    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    // Function to navigate to the next slide
    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <>
            <div className="wel-outer">
                <div className="wel-heading">
                    <h1>Get Your Next</h1>
                    <h1 className="head2">Portrait</h1>
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    ref={swiperRef} // Attach the ref to the Swiper
                    spaceBetween={5} // Set space between slides
                    slidesPerView={3}  // Show 3 slides at a time
                    centeredSlides={true} // Center the active slide
                    pagination={{ clickable: true }} // Enable pagination
                    loop={true} // Enable infinite loop
                    autoplay={{
                        delay: 3000, // Delay between transitions (3 seconds)
                        disableOnInteraction: false, // Continue autoplay after interactions
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                      }}
                    modules={[Autoplay,EffectCoverflow]}
                    className="mySwiper"
                >
                    {
                        arts.map((art, index) => (
                            <SwiperSlide key={index} className="curved-slide">
                                <img src={art} alt={`Art ${index + 1}`} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {/* Navigation Buttons */}
                <div className="swiper-navigation">
                    <button className="swiper-button" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className="swiper-button" onClick={handleNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </>
    );
}
