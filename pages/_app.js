import { useEffect } from "react";

import "../styles/globals.css";
import "../components/css/style.css";
// import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";

import AOS from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
