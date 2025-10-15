import Header from './Header';
import Hero from './Hero';
import ReactivationBanner from './ReactivationBanner'; // optional
import About from './About';
import Benefits from './Benefits';
import Facilities from './Facilities';
import Campaigns from './Campaigns';
import PlansComparison from './PlansComparison';
import Team from './Team';
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
    <Facilities />
    <Campaigns />
    <PlansComparison />
    <Team />
    <Gallery /> {/* Remove if not needed */}
    <FinalCTA />
    <WhatsAppFloat />
    <InstagramFloat />
    <Footer />
  </>
);

export default LandingPage;
