import React, { useState, useEffect } from 'react';

const Social = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [activeRipple, setActiveRipple] = useState(null);

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

        const element = document.getElementById('social-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const handleCardClick = (platform) => {
        setActiveRipple(platform);
        setTimeout(() => setActiveRipple(null), 800);
    };

    const socialPlatforms = [
        {
            name: 'WhatsApp',
            username: '+977+977 982-324-8793',
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/>
                </svg>
            ),
            link: 'https://wa.me/9779823248793',
            gradient: 'from-green-400 via-green-500 to-green-600',
            hoverGradient: 'hover:from-green-500 hover:via-green-600 hover:to-green-700',
            shadowColor: 'shadow-green-500/25',
            bgPattern: 'bg-gradient-to-br from-green-400/10 to-green-600/10',
            description: 'Chat instantly',
            delay: 'animate-delay-100'
        },
        {
            name: 'Instagram',
            username: '@pushannnnnnn',
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            link: 'https://www.instagram.com/pushannnnnnn/',
            gradient: 'from-pink-500 via-red-500 to-yellow-500',
            hoverGradient: 'hover:from-pink-600 hover:via-red-600 hover:to-yellow-600',
            shadowColor: 'shadow-pink-500/25',
            bgPattern: 'bg-gradient-to-br from-pink-400/10 to-yellow-400/10',
            description: 'See our photos',
            delay: 'animate-delay-200'
        },
        {
            name: 'Facebook',
            username: 'Pushan Maharjan',
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            ),
            link: 'https://www.facebook.com/pushan.maharjan.2025',
            gradient: 'from-blue-500 via-blue-600 to-blue-700',
            hoverGradient: 'hover:from-blue-600 hover:via-blue-700 hover:to-blue-800',
            shadowColor: 'shadow-blue-500/25',
            bgPattern: 'bg-gradient-to-br from-blue-400/10 to-blue-600/10',
            description: 'Follow updates',
            delay: 'animate-delay-300'
        },
        {
            name: 'Viber',
            username: '+977 982-324-8793',
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.398.482C5.104.482 0 5.587 0 11.88c0 2.734.938 5.25 2.508 7.242L.586 23.72l4.768-1.947A11.381 11.381 0 0011.398 24c6.295 0 11.398-5.105 11.398-11.398S17.693.482 11.398.482zm5.952 14.456c-.234.656-.934 1.242-1.578 1.43-.422.125-.969.227-2.82-.609-1.969-.891-3.242-2.273-4.371-3.836-.563-.781-.914-1.547-.953-2.414-.047-1.031.398-1.875.875-2.328.313-.297.609-.367.812-.367.188 0 .375.008.539.016.188.008.445-.078.695.516.258.609.875 2.125.953 2.281.078.156.133.336.023.539-.109.219-.164.352-.328.555-.164.188-.344.422-.492.555-.164.141-.336.297-.133.594.203.281.906 1.492 1.945 2.414 1.336 1.188 2.461 1.555 2.812 1.727.352.156.555.133.758-.086.203-.219.875-1.016 1.109-1.367.234-.352.469-.297.789-.188.328.109 2.062 1.0 2.414 1.18.352.18.586.258.672.406.086.148.086.836-.148 1.492z"/>
                </svg>
            ),
            link: 'viber://chat?number=9779823248793',
            gradient: 'from-purple-500 via-purple-600 to-purple-700',
            hoverGradient: 'hover:from-purple-600 hover:via-purple-700 hover:to-purple-800',
            shadowColor: 'shadow-purple-500/25',
            bgPattern: 'bg-gradient-to-br from-purple-400/10 to-purple-600/10',
            description: 'Message us',
            delay: 'animate-delay-400'
        },
        {
            name: 'TikTok',
            username: '@pushan_maharjan',
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
            ),
            link: 'https://www.tiktok.com/@pushan_maharjan',
            gradient: 'from-black via-gray-800 to-red-600',
            hoverGradient: 'hover:from-gray-900 hover:via-black hover:to-red-700',
            shadowColor: 'shadow-red-500/25',
            bgPattern: 'bg-gradient-to-br from-black/10 to-red-600/10',
            description: 'Fun videos',
            delay: 'animate-delay-500'
        }
    ];

    return (
        <section id="social" className="relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse animate-delay-300"></div>
                <div className="absolute top-1/2 left-10 w-72 h-72 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse animate-delay-500"></div>
            </div>

            {/* Simplified particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                        style={{
                            left: `${20 + (i * 15)}%`,
                            top: `${10 + (i * 10)}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: '6s'
                        }}
                    ></div>
                ))}
            </div>

            <div id="social-section" className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                {/* Header */}
                <div className={`text-center mb-10 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold text-purple-300 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-400/30">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                        Follow Us
                    </div>
                    
                    <h2 className="max-w-4xl mb-6 font-sans text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-40 -mt-12 -ml-24 text-purple-600/30 lg:w-48 lg:-ml-32 lg:-mt-16 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="social-pattern"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#social-pattern)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-pulse-custom">
                                Stay
                            </span>
                        </span>{' '}
                        <span className="text-white">Connected</span>
                    </h2>
                    
                    <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
                        Connect with us on social media for the latest updates, adorable photos, and exclusive content about our Persian kittens!
                    </p>
                </div>

                {/* Social Media Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {socialPlatforms.map((platform, index) => (
                        <div
                            key={platform.name}
                            className={`relative group ${
                                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                            }`}
                            onMouseEnter={() => setHoveredCard(platform.name)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <a
                                href={platform.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => handleCardClick(platform.name)}
                                className="block relative"
                            >
                                {/* Main Card */}
                                <div className={`relative p-6 bg-white/5 rounded-2xl border border-white/10 
                                    hover:border-white/20 hover:bg-white/8
                                    ${hoveredCard === platform.name ? `shadow-lg ${platform.shadowColor}` : 'shadow-md'}
                                    overflow-hidden`}
                                >

                                    
                                    {/* Icon Container */}
                                    <div className={`relative mb-4 w-16 h-16 mx-auto bg-gradient-to-br ${platform.gradient} 
                                        rounded-2xl flex items-center justify-center text-white shadow-md
                                        hover:shadow-lg`}
                                    >
                                        {platform.icon}
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="relative text-center">
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300">
                                            {platform.name}
                                        </h3>
                                        <p className="text-gray-400 text-xs mb-2 group-hover:text-gray-300">
                                            {platform.username}
                                        </p>
                                        <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400">
                                            {platform.description}
                                        </p>
                                    </div>

                                    {/* Interactive Elements */}
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100">
                                        <div className="w-5 h-5 bg-white/40 rounded-full flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Bottom Accent Line */}
                                    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${platform.gradient} group-hover:w-full rounded-b-2xl`}></div>
                                </div>

                            </a>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`mt-12 text-center transition-all duration-1000 animate-delay-700 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20 backdrop-blur-xl rounded-3xl border border-white/10">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Join Our Community!
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                                Follow us for daily doses of cuteness, behind-the-scenes content, and be the first to know about new arrivals!
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <div className="flex items-center space-x-2 text-gray-400">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-sm">Active daily</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animate-delay-100"></span>
                                <span className="text-sm">Quick responses</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animate-delay-200"></span>
                                <span className="text-sm">Exclusive content</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optimized Animations */}
            <style jsx>{`
                @keyframes ripple {
                    0% { opacity: 0; transform: scale(0.8); }
                    50% { opacity: 1; }
                    100% { opacity: 0; transform: scale(1.2); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                
                @keyframes pulse-custom {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }
                
                .animate-ripple {
                    animation: ripple 0.5s ease-out;
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-pulse-custom {
                    animation: pulse-custom 2s ease-in-out infinite;
                }
                
                
                .animate-delay-100 { animation-delay: 0.1s; }
                .animate-delay-200 { animation-delay: 0.2s; }
                .animate-delay-300 { animation-delay: 0.3s; }
                .animate-delay-400 { animation-delay: 0.4s; }
                .animate-delay-500 { animation-delay: 0.5s; }
                .animate-delay-700 { animation-delay: 0.7s; }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Social;
