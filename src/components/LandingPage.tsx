import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ReactivationBanner from './ReactivationBanner';
import About from './About';
import Benefits from './Benefits';
import Campaigns from './Campaigns';
import Plans from './Plans';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import FinalCTA from './FinalCTA';
import WhatsAppFloat from './WhatsAppFloat';
import InstagramFloat from './InstagramFloat';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ReactivationBanner />
            <About />
            <Benefits />
            <Campaigns />
            <Plans />
            <Testimonials />
            <Gallery />
            <FinalCTA />
            <WhatsAppFloat />
            <InstagramFloat />
            <Footer />
        </div>
    );
};

export default LandingPage;