import React from 'react'
import Hero from './components/Hero'
import  Pricing  from './components/Pricing'
import Social from './components/Social'
import Blog from './components/Blog'
import Contact from './components/Contact'
import  Footer  from './components/Footer'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import ScrollToTop from './components/ScrollToTop'
import Gallery from './components/Gallery'

const App = () => {
  return (
    <>
      <div>
        <Hero />
        <Gallery />
        <Pricing />
        <Social />
        <Banner />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </>
  )
}
export default App
