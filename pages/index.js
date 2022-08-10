import React from "react";

import Header from "../components/partials/Header";
import HeroHome from "../components/partials/HeroHome";
import FeaturesHome from "../components/partials/Features";
import FeaturesBlocks from "../components/partials/FeaturesBlocks";
import Newsletter from "../components/partials/Newsletter";
import Footer from "../components/partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
