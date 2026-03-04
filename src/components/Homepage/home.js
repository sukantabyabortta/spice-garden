import HeroSlider from "../hero-slider";
import CustomSection1 from "./CustomSection/custom-section-1";
import About from "../about";
import QuickAccess from "./QuickAccess/QuickAccess";
import quickAccessData from "./QuickAccess/quickAccessData";
import HomeGallery from "../Gallery/homeGallery";
import OurChefs from "./Chef/ourChef";
import ServicePage from "../Service/ServicePage";
function Home() {
  return (
    <>
      <HeroSlider />
      <CustomSection1 />
      <About
        showHero={false}
        showBreadcrumbs={false}
        showChefs={false}
      />
      <QuickAccess
            title={quickAccessData.title}
            links={quickAccessData.links}
      />
      <HomeGallery />
      <OurChefs />
      <ServicePage />
    </>
  );
}

export default Home;