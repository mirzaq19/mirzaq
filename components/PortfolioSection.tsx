import Container from "./Container";
import TitleSection from "./TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Navigation]);

export default function PortfolioSection() {
  const projects = [
    {
      title: "Mojokarya Store",
      link: "https://mojokarya.mirzaq.com",
      active: false,
      image: "/assets/projects/p1.webp",
    },
    {
      title: "CMS with Laravel",
      link: "https://cms1.mirzaq.com",
      active: false,
      image: "/assets/projects/p2.webp",
    },
    {
      title: "Sijubela Online Store",
      link: "https://sijubela.mirzaq.com",
      active: false,
      image: "/assets/projects/p3.webp",
    },
    {
      title: "Bookshelf Apps",
      link: "https://bookshelf.mirzaq.com",
      active: false,
      image: "/assets/projects/p4.webp",
    },
  ];
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <div id="portfolio" className="bg-dark2">
      <Container>
        <TitleSection title="Portfolio Gallery" />
        <div className="my-10 flex justify-center items-center">
          <Swiper
            className="max-w-5xl"
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              prevEl,
              nextEl,
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full"
                  />
                  <div className="text-center mt-4">
                    {project.active ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white border-transparent border-b-2 hover:border-white transition-all duration-300"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span className="text-white border-transparent border-b-2 hover:border-white transition-all duration-300">
                        {project.title}
                      </span>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <button
              ref={(node) => setPrevEl(node)}
              className="text-base md:text-2xl absolute top-1/2 left-2 -translate-y-1/2 z-[1] p-4 md:p-5 disabled:opacity-40 rounded-full bg-gradient-to-br from-peach to-grape"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              />
            </button>
            <button
              ref={(node) => setNextEl(node)}
              className="text-base md:text-2xl absolute top-1/2 right-2 -translate-y-1/2 z-[1] p-4 md:p-5 disabled:opacity-40 rounded-full bg-gradient-to-br from-peach to-grape"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              />
            </button>
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
