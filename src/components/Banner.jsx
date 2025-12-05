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
            title: "Local Breeding Excellence",
            description: "Our kittens are bred locally with love and care in a clean, spacious environment. Every kitten grows up in a home setting, not a commercial facility, ensuring proper socialization and gentle temperaments.",
            highlight: "Home-raised, not factory-bred"
        },
        {
            icon: "💚",
            title: "Healthy, Happy Mothers",
            description: "Our mother cats are bred responsibly - only twice a year with proper rest periods in between. This ensures stronger, healthier offspring with better immune systems and longer lifespans.",
            highlight: "Ethical breeding practices"
        },
        {
            icon: "💰",
            title: "Direct Sales, Fair Pricing",
            description: "We sell directly to customers, eliminating middleman costs and dealer markups. You get premium quality kittens at honest prices, with complete transparency about breeding and health history.",
            highlight: "No hidden fees or markups"
        },
        {
            icon: "🏆",
            title: "Quality Guarantee",
            description: "100% breed guarantee with complete health certificates, vaccination records, and deworming documentation. We provide ongoing support and guidance for the lifetime of your pet.",
            highlight: "Lifetime support included"
        },
        {
            icon: "🩺",
            title: "Veterinary Care",
            description: "Every kitten receives regular veterinary check-ups, vaccinations, and health screenings before going to their new home. We maintain detailed medical records for complete peace of mind.",
            highlight: "Fully vaccinated & health certified"
        },
        {
            icon: "🎓",
            title: "Expert Guidance",
            description: "We provide comprehensive care guides, training tips, and nutritional advice. Our team is always available to answer questions and help you through every stage of your kitten's development.",
            highlight: "Free consultation & support"
        }
    ];

    const testimonials = [
        {
            name: "Priya Sharma",
            location: "Kathmandu",
            rating: 5,
            text: "We got our Persian kitten from them 6 months ago, and she's absolutely healthy and playful! The team was so helpful and transparent throughout.",
            image: "👩"
        },
        {
            name: "Rajesh Thapa",
            location: "Lalitpur",
            rating: 5,
            text: "Best decision ever! Our kitten came with all vaccinations done and complete health records. Much better than dealing with pet shops.",
            image: "👨"
        },
        {
            name: "Anita Rai",
            location: "Bhaktapur",
            rating: 5,
            text: "The difference is clear - our kitten is so much healthier than the ones we saw at pet stores. Highly recommend their ethical breeding approach!",
            image: "👩"
        }
    ];

    const comparisonData = [
        { feature: "Breeding Frequency", us: "2 times/year", others: "4-6 times/year" },
        { feature: "Mother's Health", us: "Regular vet care", others: "Minimal care" },
        { feature: "Kitten Socialization", us: "Home environment", others: "Cages/confined" },
        { feature: "Price Markup", us: "Direct pricing", others: "2-3x markup" },
        { feature: "Health Guarantee", us: "100% certified", others: "Often none" },
        { feature: "After-sale Support", us: "Lifetime", others: "Limited/none" }
    ];

    return (
        <section id="banner-section" className="relative overflow-hidden">
            <div className="relative mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
                {/* Stats Section */}
                <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 ${
                                    currentStat === index ? 'scale-110 border-2 border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50' : 'hover:scale-105'
                                }`}
                            >
                                <div className="text-5xl mb-3">{stat.icon}</div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="mx-auto max-w-[1400px]">
                    <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
                        <div className="inline-flex items-center px-8 py-4 mb-10 text-base font-bold text-indigo-700 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full shadow-lg">
                            <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3 animate-pulse"></span>
                            Why Choose Us Over Pet Shops & Dealers
                        </div>

                        <h1 className="text-lg font-extrabold text-gray-900 sm:text-6xl lg:text-4xl leading-tight mb-10">
                            The Difference is in
                            <span className="block mt-2">
                                <strong className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Our Care & Ethics</strong>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto mb-6">
                            Most pet shops import kittens from India at wholesale prices and sell them to customers at 2-3x markups.
                            Those kittens often come from mothers that are overbred (4-6 times per year), which results in weaker offspring with health issues and shorter lifespans.
                        </p>
                        <p className="text-2xl font-bold text-indigo-600 max-w-4xl mx-auto">
                            We've decided to do things differently - with ethics, care, and transparency at our core.
                        </p>
                    </div>

                    {/* Advantages Grid */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:from-indigo-200 group-hover:to-purple-200 group-hover:scale-110 transition-all duration-300">
                                    {advantage.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4 text-base">
                                    {advantage.description}
                                </p>
                                <div className="inline-block px-4 py-2 bg-indigo-50 rounded-full">
                                    <span className="text-sm font-semibold text-indigo-600">✓ {advantage.highlight}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                            Side-by-Side <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Comparison</span>
                        </h2>
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                            <div className="grid grid-cols-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
                                <div className="font-bold text-lg">Feature</div>
                                <div className="font-bold text-lg text-center">✓ Us</div>
                                <div className="font-bold text-lg text-center">✗ Pet Shops/Dealers</div>
                            </div>
                            {comparisonData.map((item, index) => (
                                <div key={index} className={`grid grid-cols-3 p-6 border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <div className="font-semibold text-gray-800">{item.feature}</div>
                                    <div className="text-center text-green-600 font-semibold">{item.us}</div>
                                    <div className="text-center text-red-500 font-semibold">{item.others}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '800ms'}}>
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                            What Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Happy Customers</span> Say
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="flex items-center mb-4">
                                        <div className="text-5xl mr-4">{testimonial.image}</div>
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-xl">⭐</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1000ms'}}>
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
                            <h3 className="text-4xl font-bold text-white mb-6">Ready to Welcome a Healthy Kitten?</h3>
                            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                                Join 50+ happy families who chose ethical breeding and healthy kittens. Get in touch today for a transparent, caring experience.
                            </p>
                            <button className="bg-white text-indigo-600 font-bold text-lg px-12 py-5 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                                Contact Us Today 🐱
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner