import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

        const element = document.getElementById('testimonials-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isVisible]);

    const testimonials = [
        {
            name: "Priya Sharma",
            location: "Kathmandu",
            image: "👩🏻",
            rating: 5,
            text: "We got our beautiful Persian kitten Luna from Persian Cat Nepal 6 months ago. She's absolutely healthy, playful, and has the most gorgeous coat! The team provided excellent support throughout the process.",
            kitten: "Luna - Female Persian"
        },
        {
            name: "Raj Patel",
            location: "Pokhara",
            image: "👨🏻",
            rating: 5,
            text: "Amazing experience! Our male Persian kitten Max is everything we hoped for. The health guarantee and documentation were perfect. Highly recommend to anyone looking for authentic Persian kittens in Nepal.",
            kitten: "Max - Male Persian"
        },
        {
            name: "Sita Gurung",
            location: "Bharatpur",
            image: "👩🏽",
            rating: 5,
            text: "The delivery service was excellent! Our kitten arrived safely and was exactly as described. The breeder's dedication to quality and health is evident. Thank you for bringing Mimi into our lives!",
            kitten: "Mimi - Female Persian"
        },
        {
            name: "Anish Thapa",
            location: "Lalitpur",
            image: "👨🏽",
            rating: 5,
            text: "Professional service with genuine care for the kittens. Our Persian cat Fluffy is now 1 year old and perfectly healthy. The ongoing support and advice have been invaluable for first-time cat parents.",
            kitten: "Fluffy - Male Persian"
        },
        {
            name: "Maya Rai",
            location: "Biratnagar",
            image: "👩🏻",
            rating: 5,
            text: "Best decision ever! Our Persian princess Bella is so well-socialized and friendly. The breeding practices are ethical and the love for these cats is obvious. Worth every rupee!",
            kitten: "Bella - Female Persian"
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span
                key={i}
                className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
                ⭐
            </span>
        ));
    };

    return (
        <section id="testimonials-section" className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-l from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-indigo-300/20 to-blue-300/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
            </div>
            
            <div className="relative px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
                        Happy Customers
                    </div>
                    
                    <h2 className="max-w-3xl mb-8 font-sans text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl mx-auto">
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            What Our
                        </span>
                        <span className="text-gray-800"> Families Say</span>
                    </h2>
                    
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Don't just take our word for it. Here's what our wonderful kitten families 
                        have to say about their experience with Persian Cat Nepal.
                    </p>
                </div>

                {/* Main Testimonial Display */}
                <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 animate-delay-200 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Testimonial Card */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mx-8 relative overflow-hidden">
                            {/* Quote Icon */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100 to-transparent rounded-3xl flex items-center justify-center">
                                <svg className="w-16 h-16 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                            </div>

                            <div key={currentTestimonial} className="animate-fade-in-up">
                                {/* Rating */}
                                <div className="flex items-center justify-center mb-6">
                                    {renderStars(testimonials[currentTestimonial].rating)}
                                </div>

                                {/* Testimonial Text */}
                                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 text-center leading-relaxed mb-8">
                                    "{testimonials[currentTestimonial].text}"
                                </blockquote>

                                {/* Customer Info */}
                                <div className="text-center">
                                    <div className="inline-flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center text-3xl">
                                                {testimonials[currentTestimonial].image}
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-gray-900 text-lg">
                                                {testimonials[currentTestimonial].name}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {testimonials[currentTestimonial].location}
                                            </p>
                                            <p className="text-purple-600 text-sm font-semibold">
                                                Parent of {testimonials[currentTestimonial].kitten}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 space-x-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentTestimonial
                                            ? 'bg-purple-600 scale-125'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`View testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 animate-delay-500 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    {[
                        { number: "50+", label: "Happy Families", icon: "👨‍👩‍👧‍👦" },
                        { number: "100%", label: "Satisfaction Rate", icon: "😊" },
                        { number: "200+", label: "Healthy Kittens", icon: "🐱" },
                        { number: "5⭐", label: "Average Rating", icon: "⭐" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift">
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <div className="text-3xl font-bold text-purple-600 mb-1">{stat.number}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`text-center mt-16 transition-all duration-1000 animate-delay-700 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <a
                            href="#pricing"
                            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            <span className="mr-2 transition-transform group-hover:scale-110">🐱</span>
                            Find Your Kitten
                        </a>
                        
                        <a
                            href="#contact-section"
                            className="group inline-flex items-center justify-center px-8 py-4 border-2 border-purple-500 text-purple-600 font-semibold text-lg rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            <span className="mr-2 transition-transform group-hover:scale-110">💬</span>
                            Share Your Story
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
