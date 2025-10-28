import React, { useState, useEffect } from 'react'
import image from '../assets/image.png'

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isPricingDropdownOpen, setIsPricingDropdownOpen] = useState(false)
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        // Close dropdowns when main menu is toggled
        setIsPricingDropdownOpen(false)
        setIsContactDropdownOpen(false)
    }

    const togglePricingDropdown = () => {
        setIsPricingDropdownOpen(!isPricingDropdownOpen)
    }

    const closePricingDropdown = () => {
        setIsPricingDropdownOpen(false)
    }

    const toggleContactDropdown = () => {
        setIsContactDropdownOpen(!isContactDropdownOpen)
    }

    const closeContactDropdown = () => {
        setIsContactDropdownOpen(false)
    }

    // Social media platforms data
    const socialPlatforms = [
        {
            name: 'WhatsApp',
            link: 'https://wa.me/9779823248793',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/>
                </svg>
            ),
            color: 'text-green-600'
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/pushannnnnnn/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            color: 'text-pink-600'
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/pushan.maharjan.2025',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            ),
            color: 'text-blue-600'
        },
        {
            name: 'Viber',
            link: 'viber://chat?number=9779823248793',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.398.482C5.104.482 0 5.587 0 11.88c0 2.734.938 5.25 2.508 7.242L.586 23.72l4.768-1.947A11.381 11.381 0 0011.398 24c6.295 0 11.398-5.105 11.398-11.398S17.693.482 11.398.482zm5.952 14.456c-.234.656-.934 1.242-1.578 1.43-.422.125-.969.227-2.82-.609-1.969-.891-3.242-2.273-4.371-3.836-.563-.781-.914-1.547-.953-2.414-.047-1.031.398-1.875.875-2.328.313-.297.609-.367.812-.367.188 0 .375.008.539.016.188.008.445-.078.695.516.258.609.875 2.125.953 2.281.078.156.133.336.023.539-.109.219-.164.352-.328.555-.164.188-.344.422-.492.555-.164.141-.336.297-.133.594.203.281.906 1.492 1.945 2.414 1.336 1.188 2.461 1.555 2.812 1.727.352.156.555.133.758-.086.203-.219.875-1.016 1.109-1.367.234-.352.469-.297.789-.188.328.109 2.062 1.0 2.414 1.18.352.18.586.258.672.406.086.148.086.836-.148 1.492z"/>
                </svg>
            ),
            color: 'text-purple-600'
        }
    ]

    return (
        <div className="relative pt-32 pb-8 bg-black xl:pt-40 sm:pb-12 lg:pb-20 xl:pb-24 2xl:pb-32 overflow-hidden">
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>

            {/* Floating elements for decoration */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float animate-delay-100 hidden lg:block"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-float animate-delay-300 hidden lg:block"></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/5 rounded-full animate-float animate-delay-500 hidden lg:block"></div>

            <header className={`absolute inset-x-0 top-0 z-30 py-8 xl:py-12 transition-all duration-700 ${isLoaded ? 'animate-fade-in-down' : 'opacity-0'
                }`}>
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-shrink-0">
                            <a href="#" title="Persian Cat Nepal" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-indigo-500 transition-all duration-300 hover:scale-105">
                                <h1 className="font-sans font-normal text-2xl sm:text-3xl lg:text-4xl text-white italic bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-indigo-300 hover:to-white transition-all duration-300">
                                    Persian Cat Nepal
                                </h1>
                            </a>
                        </div>

                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="relative p-3 -m-3 transition-all duration-300 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 hover:bg-white/10 hover:scale-110 z-50"
                                aria-label="Toggle mobile menu"
                                aria-expanded={isMenuOpen}
                            >
                                <svg className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                            <a href="#banner-section" className="font-sans text-base font-normal transition-all duration-300 rounded text-white hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 relative group">
                                About Us
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <div className="relative group">
                                <button
                                    onClick={togglePricingDropdown}
                                    onMouseEnter={() => setIsPricingDropdownOpen(true)}
                                    onMouseLeave={() => setIsPricingDropdownOpen(false)}
                                    className="font-sans text-base font-normal transition-all duration-300 rounded text-white hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 relative group flex items-center"
                                >
                                    Pricing
                                    <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isPricingDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                                </button>

                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 transition-all duration-200 z-50 ${isPricingDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                                        }`}
                                    onMouseEnter={() => setIsPricingDropdownOpen(true)}
                                    onMouseLeave={() => setIsPricingDropdownOpen(false)}
                                >
                                    <div className="py-2">
                                        <a
                                            href="#pricing"
                                            onClick={closePricingDropdown}
                                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 flex items-center"
                                        >
                                            <span className="mr-2">🐱</span>
                                            Female
                                        </a>
                                        <a
                                            href="#pricing"
                                            onClick={closePricingDropdown}
                                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 flex items-center"
                                        >
                                            <span className="mr-2">🦁</span>
                                            Male
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <button
                                    onClick={toggleContactDropdown}
                                    onMouseEnter={() => setIsContactDropdownOpen(true)}
                                    onMouseLeave={() => setIsContactDropdownOpen(false)}
                                    className="font-sans text-base font-normal transition-all duration-300 rounded text-white hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 relative group flex items-center"
                                >
                                    Contact
                                    <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isContactDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                                </button>

                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 transition-all duration-200 z-50 ${isContactDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                                        }`}
                                    onMouseEnter={() => setIsContactDropdownOpen(true)}
                                    onMouseLeave={() => setIsContactDropdownOpen(false)}
                                >
                                    <div className="py-2">
                                        {socialPlatforms.map((platform) => (
                                            <a
                                                key={platform.name}
                                                href={platform.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={closeContactDropdown}
                                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 flex items-center"
                                            >
                                                <span className={`mr-3 ${platform.color}`}>
                                                    {platform.icon}
                                                </span>
                                                {platform.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#social-section"
                                className="
                                    inline-flex items-center justify-center px-6 py-3 font-sans text-base font-semibold
                                    leading-7 transition-all duration-300 border-2 rounded-full text-white
                                    border-indigo-500 bg-indigo-500/20 backdrop-blur-sm
                                    hover:bg-white hover:text-indigo-600 hover:border-white
                                    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500
                                    transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20
                                "
                            >
                                Get Started
                            </a>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div className={`md:hidden transition-all duration-500 overflow-hidden z-40 ${isMenuOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="bg-black/90 backdrop-blur-md rounded-lg p-6 space-y-4 border border-white/20 shadow-2xl">
                            <a href="#banner-section" onClick={toggleMenu} className="block font-sans text-base font-normal text-white hover:text-indigo-300 transition-colors duration-300 py-2 border-b border-white/10">
                                About Us
                            </a>
                            <div className="border-b border-white/10">
                                <button
                                    onClick={togglePricingDropdown}
                                    className="w-full flex items-center justify-between font-sans text-base font-normal text-white hover:text-indigo-300 transition-colors duration-300 py-2"
                                >
                                    Pricing
                                    <svg className={`w-4 h-4 transition-transform duration-200 ${isPricingDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {/* Mobile Dropdown */}
                                <div className={`overflow-hidden transition-all duration-300 ${isPricingDropdownOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pl-4 pb-2">
                                        <a
                                            href="#pricing"
                                            onClick={() => { toggleMenu(); closePricingDropdown(); }}
                                            className="block py-1 text-sm text-white/80 hover:text-indigo-300 transition-colors duration-200 flex items-center"
                                        >
                                            <span className="mr-2">🐱</span>
                                            Female
                                        </a>
                                        <a
                                            href="#pricing"
                                            onClick={() => { toggleMenu(); closePricingDropdown(); }}
                                            className="block py-1 text-sm text-white/80 hover:text-indigo-300 transition-colors duration-200 flex items-center"
                                        >
                                            <span className="mr-2">🦁</span>
                                            Male
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-white/10">
                                <button
                                    onClick={toggleContactDropdown}
                                    className="w-full flex items-center justify-between font-sans text-base font-normal text-white hover:text-indigo-300 transition-colors duration-300 py-2"
                                >
                                    Contact
                                    <svg className={`w-4 h-4 transition-transform duration-200 ${isContactDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {/* Mobile Contact Dropdown */}
                                <div className={`overflow-hidden transition-all duration-300 ${isContactDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pl-4 pb-2">
                                        {socialPlatforms.map((platform) => (
                                            <a
                                                key={platform.name}
                                                href={platform.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => { toggleMenu(); closeContactDropdown(); }}
                                                className="block py-1 text-sm text-white/80 hover:text-indigo-300 transition-colors duration-200 flex items-center"
                                            >
                                                <span className={`mr-2 ${platform.color}`}>
                                                    {platform.icon}
                                                </span>
                                                {platform.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <a href="#social-section" onClick={toggleMenu} className="block w-full text-center px-6 py-3 font-sans text-base font-semibold bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors duration-300">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="absolute inset-0">
                <img className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" src={image} alt="Persian Cat" />
            </div>

            <div className="relative z-15">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="w-full lg:w-2/3 xl:w-1/2">
                        <div className={`transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                            }`}>
                            {/* <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold text-indigo-300 bg-indigo-500/20 backdrop-blur-sm rounded-full border border-indigo-400/30">
                                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
                                Premium Persian Kittens Available at Wholesale Prices
                            </div> */}

                            {/* <h1 className="font-sans text-sm sm:text-base font-normal tracking-tight text-white/80 mb-4">
                                Purchase Persian Cat in Nepal at wholesale price
                            </h1> */}
                        </div>

                        <div className={`mt-6 tracking-tighter text-white transition-all duration-1000 animate-delay-200 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                            }`}>
                            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                                The road to the{' '}
                                <span className="block font-serif italic font-normal text-2xl sm:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse-custom">
                                    Persian kittens
                                </span>
                            </h2>
                        </div>

                        <div className={`mt-8 transition-all duration-1000 animate-delay-300 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                            }`}>
                            <p className="font-sans text-sm sm:text-base font-normal leading-relaxed text-white/80 max-w-2xl">
                                Purchase a Persian kitten in Nepal at a wholesale price, with a 100% breed guarantee.
                            </p>

                            <div className="inline-flex items-center mt-4 px-5 py-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full text-black font-bold text-base shadow-lg animate-pulse-custom">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Starting at ₹15,000/kitten
                            </div>
                        </div>

                        <div className={`flex flex-col sm:flex-row items-start sm:items-center mt-6 space-y-3 sm:space-y-0 sm:space-x-4 transition-all duration-1000 animate-delay-500 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                            }`}>
                            <a
                                href="#social-section"
                                className="
                                    inline-flex items-center justify-center px-6 py-3 font-sans text-sm sm:text-base
                                    font-bold transition-all duration-300 border-2 border-transparent rounded-full
                                    bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg
                                    hover:from-indigo-600 hover:to-purple-700 hover:shadow-2xl hover:shadow-indigo-500/25
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                                    transform hover:scale-105 hover:-translate-y-1 active:scale-95
                                    min-w-[180px] group
                                "
                                role="button"
                            >
                                <span className="mr-2 transition-transform group-hover:scale-110">🐱</span>
                                Get Started
                                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>

                            <a
                                href="#pricing"
                                className="
                                    inline-flex items-center justify-center px-6 py-3 font-sans text-sm sm:text-base
                                    font-semibold transition-all duration-300 bg-white/10 backdrop-blur-sm border-2
                                    rounded-full text-white border-white/30 hover:bg-white hover:text-black
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                                    transform hover:scale-105 hover:-translate-y-1 active:scale-95
                                    min-w-[180px] group
                                "
                                role="button"
                            >
                                <svg className="w-6 h-6 mr-2 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                                </svg>
                                View Pricing
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className={`flex flex-wrap items-center mt-8 space-x-6 text-xs text-white/60 transition-all duration-1000 animate-delay-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                            }`}>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>100% Breed Guarantee</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animate-delay-100"></div>
                                <span>100% Pure Breeding</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animate-delay-200"></div>
                                <span>Healthy Kittens</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 animate-delay-1000 ${isLoaded ? 'animate-bounce-custom' : 'opacity-0'
                }`}>
                <div className="flex flex-col items-center text-white/60">
                    <span className="text-xs mb-2">Scroll to explore</span>
                    <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default Hero