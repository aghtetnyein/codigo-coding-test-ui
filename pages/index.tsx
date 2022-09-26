import type { NextPage } from "next";

// components
import Navigation from "../components/Navigation";
import StickyNav from "../components/StickyNav";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <StickyNav />
    </div>
  );
};

export default Home;
