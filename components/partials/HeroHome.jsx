import React, { useState } from "react";
import Image from "next/image";
import Modal from "../utils/Modal";

const imageLoader = ({ src, width, quality }) => {
  return `https://ctk-public.s3.amazonaws.com/${src}`
}

const HeroHome = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Visually compose
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                containerized workloads
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-2xl text-gray-600 dark:text-gray-300 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Design manifests seamlessly for Kubernetes, Docker Compose, and
                ECS regardless of your experience level
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <a className="main-action" href="https://app.ctk.dev">
                  Start Composing
                </a>
              </div>
            </div>
          </div>

          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <Image
                  className=""
                  src={"/ui.png"}
                  alt="CTK UI"
                  width={1088}
                  height={577}
                />
              </div>
              <button
                className="hidden absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch demo video (2 min)</span>
              </button>
            </div>

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="https://player.vimeo.com/video/174002812"
                  title="Video"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
