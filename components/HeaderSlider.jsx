"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeaderSlider = () => {
    const sliderData = [
        {
            id: 1,
            title: "Crafting Interactive Web Experiences",
            offer: "Web Developer",
            buttonText1: "View Portfolio",
            buttonText2: "Learn More",
            images: ["/images/photo1.png"],
        },
        {
            id: 2,
            title: "Innovative UI/UX Solutions",
            offer: "Creative Designer",
            buttonText1: "See Designs",
            buttonText2: "Explore Process",
            images: ["/images/photo1.png"],
        },
        {
            id: 3,
            title: "Building Scalable Backend Systems",
            offer: "Backend Developer",
            buttonText1: "View Services",
            buttonText2: "Contact Me",
            images: ["/images/photo1.png"],
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [sliderData.length]);

    return (
        <div className="relative w-full overflow-hidden pt-12">
            {/* Slider Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out align-center"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {sliderData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="flex flex-col-reverse md:flex-row items-center justify-between py-10 px-6 md:px-16 lg:px-24 min-w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg"
                    >
                        {/* Text Content */}
                        <div className="md:w-1/2 space-y-5">
                            <p className="text-4xl font-semibold uppercase tracking-widest text-black">
                                {slide.offer}
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                                {slide.title}
                            </h1>
                            <div className="flex items-center space-x-4 mt-6">
                                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
                                    {slide.buttonText1}
                                </button>
                                <button className="flex items-center gap-3 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-blue-600 transition">
                                    {slide.buttonText2}
                                    <Image
                                        className="transition-transform transform hover:translate-x-1"
                                        src="/images/arrow_icon.svg"
                                        alt="arrow_icon"
                                        width={18}
                                        height={18}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex items-center justify-center md:w-1/2">
                            {slide.images.map((imgSrc, imgIndex) => (
                                <Image
                                    key={imgIndex}
                                    className="w-64 md:w-72 rounded-full shadow-xl transition-all hover:scale-105"
                                    src={imgSrc}
                                    alt={`Slide ${index + 1} - Image ${imgIndex + 1}`}
                                    width={1000}
                                    height={1000}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex items-center justify-center gap-3 mt-8">
                {sliderData.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 w-3 rounded-full cursor-pointer transition-all ${currentSlide === index ? "bg-white scale-125 shadow-md" : "bg-gray-400/50"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default HeaderSlider;
