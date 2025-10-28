import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up scroll listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Scroll to top button at bottom right */}
            <div className="fixed bottom-8 right-8 z-50">
                    <button
                        onClick={scrollToTop}
                        className={`
                            w-14 h-14 
                            bg-gradient-to-r from-indigo-500 to-purple-600 
                            hover:from-indigo-600 hover:to-purple-700
                            text-white 
                            rounded-full 
                            shadow-lg hover:shadow-xl
                            transition-all duration-300 
                            transform hover:scale-110 hover:-translate-y-1
                            focus:outline-none focus:ring-4 focus:ring-indigo-300
                            pointer-events-auto
                            group
                            ${isVisible ? 'opacity-100 animate-bounce-subtle' : 'opacity-70'}
                        `}
                        aria-label="Scroll to top"
                        title="Back to Hero Section"
                    >
                        {/* Up Arrow Icon */}
                        <svg 
                            className="w-6 h-6 mx-auto transform transition-transform duration-300 group-hover:-translate-y-0.5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={3} 
                                d="M5 15l7-7 7 7" 
                            />
                        </svg>
                        
                        {/* Pulse animation when visible */}
                        <div className={`absolute inset-0 rounded-full bg-white transition-all duration-1000 ${
                            isVisible ? 'opacity-20 animate-ping' : 'opacity-0'
                        }`}></div>
                    </button>
            </div>

            {/* Add custom styles */}
            <style jsx>{`
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                
                .animate-bounce-subtle {
                    animation: bounce-subtle 2s ease-in-out infinite;
                }
            `}</style>
        </>
    );
};

export default ScrollToTop;
