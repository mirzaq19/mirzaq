import Image from "next/image";
import TitleSection from "./TitleSection";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDrawPolygon,
  faMobileAlt,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

export default function SkillSection() {
  return (
    <div className="bg-dark1">
      <Container>
        <TitleSection title="My Skill" />
        <p className="text-xs sm:text-base lg:text-lg text-center mt-5 mb-10">
          When creating projects, there are several technologies in web
          development that I usually use. Below are some of the ones I usually
          use
        </p>
        <div className="grid grid-cols-3 px-10 justify-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 xl:gap-16 xl:px-20 2xl:px-56">
          <Image
            src="/assets/techstack/VScode_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/HTML_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/CSS_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/Sass_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/Javascript_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/React_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/Illustrator_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/Figma_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col my-20 px-10 gap-y-14 sm:gap-y-20 sm:pt-12 lg:gap-y-0 lg:flex-row lg:pt-14 lg:gap-x-10 xl:gap-x-20 xl:px-20 2xl:px-52">
          <div className="text-center bg-dark3 p-8 rounded-xl relative">
            <div
              className="
              text-3xl 
              sm:text-5xl 
              p-9 
              sm:p-14
              absolute 
              -translate-x-1/2 
              -translate-y-16 
              sm:-translate-y-24
              transfor 
              inline-block 
              rounded-full 
              bg-gradient-to-br 
              from-peach 
              to-violet-900"
            >
              <FontAwesomeIcon
                className="absolute -translate-x-1/2 -translate-y-1/2"
                icon={faDrawPolygon}
              />
            </div>
            <h1 className="text-base sm:text-2xl lg:text-3xl font-bold mt-5 sm:mt-9 mb-3">
              Graphic Design
            </h1>
            <p className="text-xs sm:text-base md:text-lg">
              In the field of graphic design, I usually make designs for assets
              on my website or projects using Adobe Illustrator
            </p>
          </div>
          <div className="text-center bg-dark3 p-8 rounded-xl relative">
            <div
              className="
              text-3xl 
              sm:text-5xl 
              p-9 
              sm:p-14
              absolute 
              -translate-x-1/2 
              -translate-y-16 
              sm:-translate-y-24
              transfor 
              inline-block 
              rounded-full 
              bg-gradient-to-br 
              from-peach 
              to-violet-900"
            >
              <FontAwesomeIcon
                className="absolute -translate-x-1/2 -translate-y-1/2"
                icon={faMobileAlt}
              />
            </div>
            <h1 className="text-base sm:text-2xl lg:text-3xl font-bold mt-5 sm:mt-9 mb-3">
              UI/UX Design
            </h1>
            <p className="text-xs sm:text-base md:text-lg">
              In the field of UI/UX design I also have experience in using
              design platforms such as figma. This website is one that I
              designed using figma
            </p>
          </div>
          <div className="text-center bg-dark3 p-8 rounded-xl relative">
            <div
              className="
              text-3xl 
              sm:text-5xl 
              p-9 
              sm:p-14
              absolute 
              -translate-x-1/2 
              -translate-y-16 
              sm:-translate-y-24
              transfor 
              inline-block 
              rounded-full 
              bg-gradient-to-br 
              from-peach 
              to-violet-900"
            >
              <FontAwesomeIcon
                className="absolute -translate-x-1/2 -translate-y-1/2"
                icon={faLaptopCode}
              />
            </div>
            <h1 className="text-base sm:text-2xl lg:text-3xl font-bold mt-5 sm:mt-9 mb-3">
              Web Development
            </h1>
            <p className="text-xs sm:text-base md:text-lg">
              In the field of web development, when I work on projects I am also
              familiar with several technologies such as HTML, CSS, Javascript,
              Typescript, React, and so on.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
