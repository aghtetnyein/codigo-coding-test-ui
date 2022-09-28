import type { NextPage } from "next";

// components
import Navigation from "../components/Navigation";
import QA from "../components/QA";
import StickyNav from "../components/StickyNav";
import TV from "../components/TV";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import SectionHero from "../components/SectionHero";
import Gallery from "../components/Gallery";
import NewGallery from "../components/NewGallery";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <StickyNav />
      <SectionHero />
      {/* <Gallery /> */}
      <NewGallery />
      <TV />
      <QA />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
