import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import AboutUs2 from './Components/Aboutus2';
import Services from './Components/Services';
import Contact from './Components/Contactus2';
// import Footer1 from './Components/Footer1';
import Footer2 from './Components/Footer2'; 
// import Footer3 from './Components/Footer3';
// import Clients from './Clients/clients';
import Digitalmarketing from './Digital Marketing/Digitalmarketing';
import Mobiledevelopement from './Mobile App Development/Mobileapp';
import Products from './products/Products';
import Uiux from './UXUI Designing/Uiux';
import Webdesign from './Web Design/Webdesign';
import Webdevelopment from './Web Development/Webdevelop';
import Websecurity from './Web Security/Web Security';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Contactus2 from './Components/Contactus2';
import Contactus from './Components/Contactus';
import Aboutus1 from './Components/Aboutus1';
import Aboutus2 from './Components/Aboutus2';
import Aboutus3 from './Components/Aboutus3';
import Aboutus4 from './Components/Aboutus4';
import Footer from './Components/wraper/Footer';
import WhyChooseUs from './Components/WhyChooseUs';
import TechStack from './Components/TechStack';
// import CEOFounder from './Components/CEOFounder';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Investors from './Components/Investors';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route path="/" element={<><HeroSection /><AboutUs2 /><Services /><WhyChooseUs/><Contact /></>} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/itsupportmaintenance" element={<Digitalmarketing />} />
        <Route path="/mobile-development" element={<Mobiledevelopement />} />
        <Route path="/investor" element={<Investors />} />
        <Route path="/ui-ux-designing" element={<Uiux />} />
        {/* AI and ML  */}
        <Route path="/aiml" element={<Webdesign />} />
        <Route path="/web-development" element={<Webdevelopment />} />
        {/* Cloud Services */}
        <Route path="/cloudservices" element={<Websecurity />} />
        
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path='/contact' element={[<Contactus/>,<Contactus2/>]} />
        {/* <Route path="/about" element={<AboutUs2 />} /> */}
        <Route path='/about' element={[<Aboutus1/>,<Aboutus2/>,<Aboutus3/>,<Aboutus4/>,]}/>
      </Routes>

    
<Footer />
    </Router>
    
  );
}

export default App;
