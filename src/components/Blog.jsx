import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [isVisible, setIsVisible] = useState(false);

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

        const element = document.getElementById('blog-section');
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
        <section id="blog" className="relative bg-gradient-to-br from-gray-50 via-white to-indigo-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-l from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
            </div>

            <div id="blog-section" className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="inline-flex items-center px-6 py-3 mb-6 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></span>
                        Our Story
                    </div>
                    
                    <h2 className="max-w-4xl mb-6 font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl mx-auto">
                        <span className="relative inline-block">
                            <span className="relative bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Why We Started
                            </span>
                        </span>{' '}
                        <span className="text-gray-800">Local Breeding</span>
                    </h2>
                    
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        The shocking truth about pet shops that led us to create a better solution for Persian cat lovers in Nepal.
                    </p>
                </div>

                {/* Main Blog Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Featured Image */}
                    <div className={`mb-12 transition-all duration-1000 animate-delay-200 ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center h-64">
                                <div className="text-center p-12">
                                    <div className="text-8xl mb-4">🐱</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Persian Kittens</h3>
                                    <p className="text-gray-600">Locally bred with love and care</p>
                                </div>
                            </div>
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <article className={`prose prose-lg max-w-none transition-all duration-1000 animate-delay-400 ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                    }`}>
                        
                        {/* Introduction */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white text-sm">😠</span>
                                </span>
                                The Pet Shop Disappointment
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                It all started when I decided to visit local pet shops to sell some of our Persian kittens. What I discovered there left me shocked and disappointed. The pet shop owners offered me incredibly low prices for our healthy, locally-bred kittens - prices that barely covered the cost of their care and nutrition.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                But here's what really upset me: <strong className="text-red-600">these same pet shops were selling similar kittens at 3-4 times the price they offered to pay me!</strong> This huge markup made me curious about where their kittens were coming from.
                            </p>
                        </div>

                        {/* The Discovery */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white text-sm">🔍</span>
                                </span>
                                The Shocking Truth
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                After some research, I discovered the disturbing reality: most pet shops in Nepal import their kittens from India at wholesale prices. While this might sound like good business, there are serious problems with this practice:
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6 my-6">
                                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                                    <h4 className="font-bold text-red-800 mb-2">❌ Overbreeding Issues</h4>
                                    <p className="text-red-700 text-sm">
                                        Many breeding facilities in India practice overbreeding, forcing mother cats to produce litters too frequently, resulting in weaker offspring.
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                                    <h4 className="font-bold text-orange-800 mb-2">🚚 Long Travel Stress</h4>
                                    <p className="text-orange-700 text-sm">
                                        Kittens endure long, stressful journeys from India to Nepal, which weakens their immune systems and affects their health.
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                The result? Customers end up paying high prices for kittens that may have health issues, weak immunity, and shorter lifespans - all while the original breeders and pet shops profit from this unethical system.
                            </p>
                        </div>

                        {/* Our Solution */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-green-200 mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white text-sm">💡</span>
                                </span>
                                Our Revolutionary Decision
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                After witnessing this unethical practice, we made a bold decision: <strong className="text-green-600">"Why not breed locally and provide healthy kittens directly to families at fair prices?"</strong>
                            </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We decided to eliminate the middleman completely and focus on responsible local breeding practices that prioritize the health and well-being of both mother cats and their kittens.
                            </p>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                    <div className="text-3xl mb-2">🏠</div>
                                    <h4 className="font-bold text-gray-800 text-sm">Local Breeding</h4>
                                    <p className="text-gray-600 text-xs">No stressful imports</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                    <div className="text-3xl mb-2">💚</div>
                                    <h4 className="font-bold text-gray-800 text-sm">Healthy Mothers</h4>
                                    <p className="text-gray-600 text-xs">Only 2 litters per year</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                    <div className="text-3xl mb-2">💰</div>
                                    <h4 className="font-bold text-gray-800 text-sm">Fair Pricing</h4>
                                    <p className="text-gray-600 text-xs">Direct to customer</p>
                                </div>
                            </div>
                        </div>

                        {/* Our Promise */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white text-sm">🤝</span>
                                </span>
                                Our Commitment to You
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Today, Persian Cat Nepal stands as a testament to ethical breeding practices. Every kitten that comes from our facility is:
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">100% Breed Guarantee</h4>
                                        <p className="text-gray-600 text-sm">Pure Persian lineage with documentation</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Locally Bred</h4>
                                        <p className="text-gray-600 text-sm">Born and raised in Nepal with love and care</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Healthy & Strong</h4>
                                        <p className="text-gray-600 text-sm">From mothers bred responsibly, only twice per year</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Fair Pricing</h4>
                                        <p className="text-gray-600 text-sm">No middleman markups - direct from breeder to family</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-xl">❤️</span>
                                </span>
                                A Promise of Love and Quality
                            </h3>
                            <p className="text-indigo-100 leading-relaxed mb-4">
                                What started as a frustrating experience with pet shops has now become our mission: to provide healthy, happy Persian kittens directly to loving families at fair prices, while ensuring the best care for our breeding cats.
                            </p>
                            <p className="text-white font-semibold">
                                When you choose Persian Cat Nepal, you're not just getting a kitten - you're getting a family member that has been raised with love, care, and ethical breeding practices.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center">
                            <div className="inline-flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-purple-700 transition-colors duration-300 shadow-lg"
                                >
                                    <span className="mr-2">🐱</span>
                                    See Our Kittens
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-500 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors duration-300"
                                >
                                    <span className="mr-2">📞</span>
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                
                .animate-delay-200 { animation-delay: 0.2s; }
                .animate-delay-400 { animation-delay: 0.4s; }
            `}</style>
        </section>
    );
};

export default Blog;
