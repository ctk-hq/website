import React from "react";
import GitHubLogo from "./GitHubLogo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="text-sm text-gray-600 dark:text-gray-300 mr-4">
            Copyright 2022. All rights reserved.
          </div>

          <ul className="flex md:order-1 md:ml-4">
            <li className="ml-4">
              <Link
                href="https://github.com/ctk-hq/ctk"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <span className="cursor-pointer">
                  <GitHubLogo />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
