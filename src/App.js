import './App.css';
import './styles/components.css';
import './styles/style.css';
import './styles/responsive.css';

import { Routes, Route } from "react-router-dom";

import Header from './components/header';
import headerData from './components/headerData';
import Navigation from './components/Homepage/Navigation/main-nav';
import Offer from './components/offer';
import Menu from './components/menu';
import Footer from './components/footer';
import footerData from "./components/footerData";
import Home from './components/Homepage/home';
import About from './components/about';
import OurStory from "./components/OurStory";
import MeetTheChef from "./components/MeetTheChef";
import Awards from "./components/Awards";
import Enquiry from "./components/enquiry";
import Gallery from "./components/Gallery/Gallery";
import Service from "./components/Service/Service";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header {...headerData} />
      <Navigation />
      <Offer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/our-story" element={<OurStory />} />
        <Route path="/meet-the-chef" element={<MeetTheChef />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/enquiry" element={<Enquiry />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Home />} /> {/* fallback */}
      </Routes>


      <Footer {...footerData} />
    </>
  );
}

export default App;
