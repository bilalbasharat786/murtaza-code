import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Features from './components/Features'
import Services from './components/Services'
import QuoteSection from './components/QuoteSection'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  

  return (
   <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="quote">
        <QuoteSection />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
