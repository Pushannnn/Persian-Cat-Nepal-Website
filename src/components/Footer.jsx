import React, { useState, useEffect } from 'react';

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentYear] = useState(new Date().getFullYear());

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

        const element = document.getElementById('footer-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const socialLinks = [
        {
            name: 'Facebook',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            ),
            href: 'https://www.facebook.com/pushan.maharjan.2025',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Instagram',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            href: 'https://www.instagram.com/pushannnnnnn/',
            color: 'hover:text-pink-600'
        },
        {
            name: 'WhatsApp',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
            ),
            href: 'https://wa.me/9779823248793',
            color: 'hover:text-green-600'
        },
        {
            name: 'Viber',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.398.482C5.104.482 0 5.587 0 11.88c0 2.734.938 5.25 2.508 7.242L.586 23.72l4.768-1.947A11.381 11.381 0 0011.398 24c6.295 0 11.398-5.105 11.398-11.398S17.693.482 11.398.482zm5.952 14.456c-.234.656-.934 1.242-1.578 1.43-.422.125-.969.227-2.82-.609-1.969-.891-3.242-2.273-4.371-3.836-.563-.781-.914-1.547-.953-2.414-.047-1.031.398-1.875.875-2.328.313-.297.609-.367.812-.367.188 0 .375.008.539.016.188.008.445-.078.695.516.258.609.875 2.125.953 2.281.078.156.133.336.023.539-.109.219-.164.352-.328.555-.164.188-.344.422-.492.555-.164.141-.336.297-.133.594.203.281.906 1.492 1.945 2.414 1.336 1.188 2.461 1.555 2.812 1.727.352.156.555.133.758-.086.203-.219.875-1.016 1.109-1.367.234-.352.469-.297.789-.188.328.109 2.062 1.0 2.414 1.18.352.18.586.258.672.406.086.148.086.836-.148 1.492z"/>
                </svg>
            ),
            href: 'viber://chat?number=9779823248793',
            color: 'hover:text-purple-600'
        }
    ];

    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'About Us', href: '#banner-section' },
        { name: 'FAQ', href: '#faq-section' },
        { name: 'Contact', href: '#contact-section' }
    ];

    const services = [
        'Persian Kittens',
        'Health Certificates',
        'Breeding Consultation',
        'Kitten Training',
        'Delivery Service',
        'Lifetime Support'
    ];

    return (
        <footer id="footer-section" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
            </div>
            
            <div className="relative px-4 pt-20 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-12 mb-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className={`sm:col-span-2 lg:col-span-1 transition-all duration-1000 ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                    }`}>
                        <a
                            href="#"
                            aria-label="Persian Cat Nepal"
                            title="Persian Cat Nepal"
                            className="inline-flex items-center group"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">🐱</span>
                            </div>
                            <span className="text-2xl font-bold tracking-wide text-white">
                                Persian Cat Nepal
                            </span>
                        </a>
                        
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Your trusted source for authentic Persian kittens in Nepal. 
                                We provide healthy, well-socialized kittens with complete health guarantees.
                            </p>
                            <p className="text-gray-400 text-sm">
                                Breeding excellence since 2020 with love, care, and dedication to the Persian breed.
                            </p>
                        </div>
                        
                        {/* Social Media Links */}
                        <div className="mt-8">
                            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-white/10 rounded-full text-gray-300 transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color} group`}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className={`transition-all duration-1000 animate-delay-200 ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                    }`}>
                        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <svg className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Services */}
                    <div className={`transition-all duration-1000 animate-delay-300 ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                    }`}>
                        <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-center text-gray-300">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></div>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact Information */}
                    <div className={`transition-all duration-1000 animate-delay-400 ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                    }`}>
                        <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center">
                                    📱
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Phone Numbers</p>
                                    <div className="space-y-1">
                                        <a
                                            href="tel:+9779823248793"
                                            className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                                        >
                                            +977 9823248793
                                        </a>
                                        <a
                                            href="tel:+9779765023296"
                                            className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                                        >
                                            +977 9765023296
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center">
                                    📧
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <a
                                        href="mailto:pusanmaharjan16@email.com"
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                                    >
                                        pusanmaharjan16@email.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center">
                                    📍
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Address</p>
                                    <a
                                        href="https://maps.google.com/?q=Nakkhu,Lalitpur"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                                    >
                                        Nakkhu, Lalitpur<br />
                                        Near Shree Archana Baba Temple
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                
                {/* Newsletter Subscription */}
                <div className={`mt-16 p-8 bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-3xl border border-indigo-700/50 backdrop-blur-sm transition-all duration-1000 animate-delay-500 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Stay Updated! 🐱
                        </h3>
                        <p className="text-gray-300 mb-8">
                            Get the latest updates about available Persian kittens, breeding news, and special offers directly in your inbox.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/20 transition-all duration-300"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                Subscribe
                            </button>
                        </div>
                        
                        <p className="text-gray-400 text-sm mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
                
                {/* Bottom Section */}
                <div className={`flex flex-col lg:flex-row justify-between items-center pt-12 mt-12 border-t border-gray-700 transition-all duration-1000 animate-delay-700 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 lg:mb-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Persian Cat Nepal. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                            <span>Made with</span>
                            <span className="text-red-400 animate-pulse">❤️</span>
                            <span>in Nepal</span>
                        </div>
                    </div>
                    
                    <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
                        <li>
                            <a
                                href="#faq-section"
                                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                            >
                                F.A.Q
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                            >
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm"
                            >
                                Breeding Ethics
                            </a>
                        </li>
                    </ul>
                </div>
                
                {/* Scroll to Top Button
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 group"
                        aria-label="Scroll to top"
                    >
                        <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div> */}
        </footer>
    );
};
