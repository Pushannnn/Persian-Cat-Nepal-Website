import React, { useState, useEffect } from 'react'

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentStat, setCurrentStat] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('banner-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    // Stats animation
    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setCurrentStat(prev => (prev + 1) % 4);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isVisible]);

    const stats = [
        { number: "50+", label: "Happy Families", icon: "🏠" },
        { number: "100%", label: "Health Guarantee", icon: "💚" },
        { number: "2 time", label: "Yearly Breeding", icon: "🐱" },
        { number: "5★", label: "Customer Rating", icon: "⭐" }
    ];

    const advantages = [
        {
            icon: "🏠",
            title: "Local Breeding",
            description: "Our kittens are bred locally with love and care, not imported from distant locations."
        },
        {
            icon: "💚",
            title: "Healthy Mothers",
            description: "Our mother cats are bred responsibly - only twice a year - ensuring stronger offspring."
        },
        {
            icon: "💰",
            title: "Direct Sales",
            description: "We sell directly to customers, eliminating middleman costs and ensuring fair pricing."
        },
        {
            icon: "🏆",
            title: "Quality Guarantee",
            description: "100% breed guarantee with health certificates and vaccination records included."
        }
    ];

    return (
        <section id="banner-section" className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
                <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-2xl animate-float animate-delay-500"></div>
            </div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
                {/* Stats Section */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-6 bg-white rounded-2xl shadow-lg hover-lift transition-all duration-500 ${currentStat === index ? 'scale-110 shadow-2xl border-2 border-indigo-200' : ''
                                    }`}
                            >
                                <div className="text-4xl mb-2">{stat.icon}</div>
                                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="mx-auto max-w-6xl">
                    <div className={`text-center mb-16 transition-all duration-1000 animate-delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                        }`}>
                        <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></span>
                            Why Choose Us
                        </div>

                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl leading-tight mb-8">
                            What makes us better than
                            <span className="block">
                                <strong className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Pet Shops</strong>
                                <span className="text-gray-700"> & Dealers?</span>
                            </span>
                        </h1>

                        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                            Most pet shops import kittens from India at wholesale prices and sell them to customers at higher rates.
                            However, those kittens often come from mothers that are overbred, which can result in weaker offspring.
                            <span className="font-semibold text-indigo-600"> We've decided to do things differently.</span>
                        </p>
                    </div>

                    {/* Advantages Grid */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 animate-delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                        }`}>
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white rounded-3xl shadow-lg hover-lift border border-gray-100 hover:border-indigo-200 transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center text-2xl group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors duration-300">
                                            {advantage.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                                            {advantage.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {advantage.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner