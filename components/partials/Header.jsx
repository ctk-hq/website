import React, { useState, useEffect } from "react";
import Link from "next/link";
import GitHubLogo from "./GitHubLogo";

const Header = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top && "bg-white backdrop-blur-sm shadow-lg"
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8" width="270" height="270" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.0711 110.924C22.1658 107.019 22.1658 100.687 26.0711 96.7817L96.7817 26.071C100.687 22.1658 107.019 22.1658 110.924 26.071L144.866 60.0132C148.771 63.9184 148.771 70.2501 144.866 74.1553L74.1554 144.866C70.2501 148.771 63.9185 148.771 60.0132 144.866L26.0711 110.924Z" fill="#2697EC" />
                <rect x="118.736" y="109.654" width="120" height="68.0015" rx="10" transform="rotate(-45 118.736 109.654)" fill="#F38432" />
                <rect x="27.3326" y="202.095" width="120" height="68.0015" rx="10" transform="rotate(-45 27.3326 202.095)" fill="#2E6DE5" />
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link href="https://github.com/ctk-hq/ctk">
                  <div
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 4,
                      padding: "8px 16px",
                      textAlign: "center",
                    }}
                    className="text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                  >
                    <div className="flex flex-row items-center">
                      <span>Star us on</span>
                      <GitHubLogo />
                      <svg
                        className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
