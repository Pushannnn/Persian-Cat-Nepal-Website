import React, { useState, useEffect } from 'react'

export const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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

        const element = document.getElementById('contact-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: '📍',
            title: 'Address',
            details: 'Nakkhu, Lalitpur\nNear Shree Archana Baba Temple',
            link: 'https://maps.google.com/?q=Nakkhu,Lalitpur'
        },
        {
            icon: '📧',
            title: 'Email',
            details: 'pusanmaharjan16@email.com',
            link: 'mailto:pusanmaharjan16@email.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            details: '+977 9823248793\n+977 9765023296',
            link: 'tel:+9779823248793'
        },
        {
            icon: '💬',
            title: 'WhatsApp',
            details: '+977 9823248793\nChat with us directly',
            link: 'https://wa.me/9779823248793'
        }
    ];

    return (
        <section id="contact-section" className="relative bg-gradient-to-br from-gray-50 via-white to-indigo-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
            </div>
            
            <div className="relative container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></span>
                        Get In Touch
                    </div>
                    
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Contact Us
                        </span>
                    </h2>
                    
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Ready to welcome a Persian kitten into your family? We're here to help you 
                        find the perfect furry companion.
                    </p>
                </div>
                
                <div className="flex flex-wrap lg:flex-nowrap gap-12">
                    {/* Contact Information & Map */}
                    <div className={`w-full lg:w-2/3 transition-all duration-1000 animate-delay-200 ${
                        isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-10'
                    }`}>
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="relative h-96 bg-gray-300">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    className="absolute inset-0"
                                    frameBorder="0"
                                    title="Persian Cat Nepal Location"
                                    marginHeight="0"
                                    marginWidth="0"
                                    scrolling="no"
                                    src="https://www.google.com/maps/embed?pb=!4v1756888256362!6m8!1m7!1s-KH-z3_YcjmD6mgD5GWaKA!2m2!1d27.67071196119675!2d85.30095331013541!3f89.26646390536456!4f13.109396534430317!5f2.024241378930135"
                                    style={{ filter: "grayscale(0.3) contrast(1.1)" }}
                                ></iframe>
                                <div className="absolute inset-0 bg-indigo-600/10"></div>
                            </div>
                            
                            <div className="p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.link}
                                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                                            rel="noopener noreferrer"
                                            className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-indigo-50 transition-all duration-300 hover-lift"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-xl group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors duration-300">
                                                    {info.icon}
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">
                                                    {info.title}
                                                </h3>
                                                <p className="text-gray-600 whitespace-pre-line text-sm group-hover:text-indigo-600 transition-colors duration-300">
                                                    {info.details}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className={`w-full lg:w-1/3 transition-all duration-1000 animate-delay-500 ${
                        isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'
                    }`}>
                        <div className="bg-white rounded-3xl shadow-2xl p-8">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                                <p className="text-gray-600">
                                    Have questions about our kittens? We'd love to hear from you!
                                </p>
                            </div>
                            
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl animate-fade-in-up">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-green-800 font-semibold">Message sent successfully!</p>
                                            <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl animate-fade-in-up">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-red-800 font-semibold">Failed to send message</p>
                                            <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-1">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center">
                                        <span className="mr-1">👤</span>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full bg-gray-50 rounded-2xl border-2 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 ${
                                            errors.name 
                                                ? 'border-red-300 focus:border-red-500 bg-red-50' 
                                                : 'border-gray-200 focus:border-indigo-500 focus:bg-white'
                                        }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1 animate-fade-in-up">{errors.name}</p>
                                    )}
                                </div>
                                
                                <div className="space-y-1">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center">
                                        <span className="mr-1">📧</span>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full bg-gray-50 rounded-2xl border-2 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 ${
                                            errors.email 
                                                ? 'border-red-300 focus:border-red-500 bg-red-50' 
                                                : 'border-gray-200 focus:border-indigo-500 focus:bg-white'
                                        }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1 animate-fade-in-up">{errors.email}</p>
                                    )}
                                </div>
                                
                                <div className="space-y-1">
                                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center">
                                        <span className="mr-1">📱</span>
                                        Phone Number (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full bg-gray-50 rounded-2xl border-2 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 ${
                                            errors.phone 
                                                ? 'border-red-300 focus:border-red-500 bg-red-50' 
                                                : 'border-gray-200 focus:border-indigo-500 focus:bg-white'
                                        }`}
                                        placeholder="+977 98xxxxxxxx"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1 animate-fade-in-up">{errors.phone}</p>
                                    )}
                                </div>
                                
                                <div className="space-y-1">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center">
                                        <span className="mr-1">💬</span>
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className={`w-full bg-gray-50 rounded-2xl border-2 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 resize-none transition-all duration-300 ${
                                            errors.message 
                                                ? 'border-red-300 focus:border-red-500 bg-red-50' 
                                                : 'border-gray-200 focus:border-indigo-500 focus:bg-white'
                                        }`}
                                        placeholder="Tell us about your interest in our Persian kittens..."
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1 animate-fade-in-up">{errors.message}</p>
                                    )}
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 ${
                                        isSubmitting
                                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:from-indigo-600 hover:to-purple-700 hover:shadow-xl'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <span>Sending...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center space-x-2">
                                            <span>🚀</span>
                                            <span>Send Message</span>
                                        </div>
                                    )}
                                </button>
                                
                                <p className="text-xs text-gray-500 text-center">
                                    We respect your privacy and will never share your information with third parties.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
