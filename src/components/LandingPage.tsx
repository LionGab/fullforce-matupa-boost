import Header from './Header';
import Hero from './Hero';
import ReactivationBanner from './ReactivationBanner'; // optional
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

// Example usage:
const LandingPage = () => (
  <>
    <Header />
    <Hero />
    <ReactivationBanner /> {/* Remove if not needed */}
    <About />
    <Benefits />
    <Campaigns />
    <Plans />
    <Testimonials />
    <Gallery /> {/* Remove if not needed */}
    <FinalCTA />
    <WhatsAppFloat />
    <InstagramFloat />
    <Footer />
  </>
);

export default LandingPage;
