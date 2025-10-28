import React, { useState, useEffect } from 'react';

export const Pricing = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

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

        const element = document.getElementById('pricing-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <section id="pricing" className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-float animate-delay-500"></div>
            </div>
            
            <div id="pricing-section" className="relative px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className={`max-w-4xl mb-6 md:mx-auto text-center transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="inline-flex items-center px-4 py-2 mb-4 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
                        Premium Pricing Plans
                    </div>
                    
                    <h2 className="max-w-3xl mb-4 font-sans text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-40 -mt-12 -ml-24 text-indigo-200 lg:w-48 lg:-ml-32 lg:-mt-16 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="pricing-pattern"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#pricing-pattern)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Affordable
                            </span>
                        </span>{' '}
                        <span className="text-gray-800">for everyone</span>
                    </h2>
                    
                    <p className="max-w-2xl mx-auto text-sm text-gray-600 leading-relaxed">
                        Get your perfect Persian kitten at unbeatable prices. We offer transparent pricing 
                        with no hidden costs, complete health guarantees, and exceptional care.
                    </p>
                </div>
                <div className="grid max-w-4xl gap-4 lg:grid-cols-2 xl:gap-6 mx-auto">
                    {/* Female Kitten Card */}
                    <div 
                        className={`relative transition-all duration-1000 animate-delay-200 ${
                            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                        }`}
                        onMouseEnter={() => setHoveredCard('female')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className={`relative p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg border border-gray-700 transition-all duration-500 hover-lift ${
                            hoveredCard === 'female' ? 'scale-105 shadow-xl border-indigo-500' : ''
                        }`}>
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-3xl"></div>
                            
                            
                            <div className="relative mb-4 text-center mt-4">
                                <div className="mb-2">
                                    <span className="text-4xl">🐱</span>
                                </div>
                                <h3 className="text-xl font-bold tracking-wide text-white mb-1">
                                    Female Persian Kitten
                                </h3>
                                <p className="text-gray-400 text-xs">Perfect for families</p>
                                
                                <div className="flex items-baseline justify-center mt-4">
                                    <span className="text-3xl lg:text-4xl font-bold text-white mr-2">
                                        ₹15,000
                                    </span>
                                    <span className="text-gray-400 text-sm">/ kitten</span>
                                </div>
                                
                            </div>
                            
                            <ul className="mb-4 space-y-2">
                                {[
                                    '100% breed guarantee',
                                    'Age: 2-3 months old',
                                    'Playful and active nature',
                                    'Health certificate included',
                                    'Basic training provided'
                                ].map((feature, index) => (
                                    <li key={index} className={`flex items-center transition-all duration-300 ${hoveredCard === 'female' ? 'transform translate-x-2' : ''}`}>
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-medium text-gray-300 text-sm">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            
                            <button
                                type="button"
                                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-base rounded-xl shadow-lg transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 hover:shadow-xl hover:shadow-indigo-500/25 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
                            >
                                <span className="flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                    Choose Female Kitten
                                </span>
                            </button>
                        </div>
                        
                        {/* Card shadow layers */}
                        <div className="w-11/12 h-3 mx-auto bg-gray-800 rounded-b-2xl opacity-60 transition-all duration-300" style={{transform: 'translateY(-2px)'}} />
                        <div className="w-10/12 h-3 mx-auto bg-gray-900 rounded-b-2xl opacity-40 transition-all duration-300" style={{transform: 'translateY(-4px)'}} />
                        <div className="w-9/12 h-3 mx-auto bg-gray-900 rounded-b-2xl opacity-20 transition-all duration-300" style={{transform: 'translateY(-6px)'}} />
                    </div>
                    {/* Male Kitten Card */}
                    <div 
                        className={`relative transition-all duration-1000 animate-delay-500 ${
                            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                        }`}
                        onMouseEnter={() => setHoveredCard('male')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className={`relative p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg border border-gray-700 transition-all duration-500 hover-lift ${
                            hoveredCard === 'male' ? 'scale-105 shadow-xl border-indigo-500' : ''
                        }`}>
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-3xl"></div>
                            
                            
                            <div className="relative mb-4 text-center mt-4">
                                <div className="mb-2">
                                    <span className="text-4xl">🦁</span>
                                </div>
                                <h3 className="text-xl font-bold tracking-wide text-white mb-1">
                                    Male Persian Kitten
                                </h3>
                                <p className="text-gray-400 text-xs">Strong and majestic</p>
                                
                                <div className="flex items-baseline justify-center mt-4">
                                    <span className="text-3xl lg:text-4xl font-bold text-white mr-2">
                                        ₹18,000
                                    </span>
                                    <span className="text-gray-400 text-sm">/ kitten</span>
                                </div>
                                
                            </div>
                            
                            <ul className="mb-4 space-y-2">
                                {[
                                    '100% breed guarantee',
                                    'Age: 2-3 months old',
                                    'Playful and active nature',
                                    'Health certificate included',
                                    'Advanced training included'
                                ].map((feature, index) => (
                                    <li key={index} className={`flex items-center transition-all duration-300 ${hoveredCard === 'male' ? 'transform translate-x-2' : ''}`}>
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-medium text-gray-300 text-sm">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            
                            <button
                                type="button"
                                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-base rounded-xl shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                            >
                                <span className="flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                    Choose Male Kitten
                                </span>
                            </button>
                        </div>
                        
                        {/* Card shadow layers */}
                        <div className="w-11/12 h-3 mx-auto bg-gray-800 rounded-b-2xl opacity-60 transition-all duration-300" style={{transform: 'translateY(-2px)'}} />
                        <div className="w-10/12 h-3 mx-auto bg-gray-900 rounded-b-2xl opacity-40 transition-all duration-300" style={{transform: 'translateY(-4px)'}} />
                        <div className="w-9/12 h-3 mx-auto bg-gray-900 rounded-b-2xl opacity-20 transition-all duration-300" style={{transform: 'translateY(-6px)'}} />
                    </div>
                </div>
                
                {/* Special Offer Section */}
                <div className={`mt-8 text-center transition-all duration-1000 animate-delay-700 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    {/* <div className="max-w-2xl mx-auto">
                        <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                            <h4 className="text-lg font-bold text-gray-800 mb-3">🐾 Special Offer</h4>
                            <p className="text-sm text-gray-700 mb-4">
                                Get a free grooming kit and 1-month supply of premium food with every kitten purchase!
                                Valid until the end of this month.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                                >
                                    🐈✨ Claim Your Offer
                                </a>
                                <span className="text-xs text-gray-500">*Limited time offer</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};
