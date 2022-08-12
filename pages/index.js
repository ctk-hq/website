import React from "react";
import Head from "next/head";

import Header from "../components/partials/Header";
import HeroHome from "../components/partials/HeroHome";
import Footer from "../components/partials/Footer";

function Home() {
  return (
    <>
      <Head>
        <title>CTK - Visual tool for containerized workflows</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Design manifests seamlessly for Kubernetes, Docker Compose, and ECS regardless of your experience level." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="flex-grow">
          <HeroHome />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
