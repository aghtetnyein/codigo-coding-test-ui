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

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <StickyNav />
      <SectionHero />
      <Gallery />
      <TV />
      <QA />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
